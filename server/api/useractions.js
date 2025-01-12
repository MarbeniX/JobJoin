import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import db from "../db/connection.js"

const router = express.Router()
// Middleware para procesar JSON

router.use(express.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jobjoin.help@gmail.com', 
        pass: '8cd0JBNJ8783'       
    }
});

// Endpoint para registrar un usuario

router.get("/verify-email", (req, res) => {
    const { correo } = req.query;

    if (!correo) {
        return res.status(400).send({ success: false, message: "El correo es obligatorio" });
    }

    const query = `SELECT * FROM Usuario WHERE correo = ?`;
    db.get(query, [correo], (err, row) => {
        if (err) {
            res.status(500).send({ success: false, message: "Error interno del servidor", error: err.message });
            console.log("Error interno del servidor")
        } else if (row) {
            res.status(200).send({ success: true, message: "El correo ya está registrado", exists: true });
            console.log("correo ya registrado")
        } else {
            res.status(200).send({ success: true, message: "El correo está disponible", exists: false });
            console.log("correo registrado correctamente")
        }
    });
});

router.get("/list-emails", (req, res) => {
    const query = `SELECT correo FROM Usuario`;

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).send({ success: false, message: "Error interno del servidor", error: err.message });
        } else {
            res.status(200).send({ success: true, data: rows });
        }
    });
});

router.post("/register", (req, res) => {
    const { nombre, correo, contraseña, tipoUsuario } = req.body;

    console.log("Datos recibidos en el registro:", req.body); // Log para ver qué datos llegan

    if (!nombre || !correo || !contraseña || !tipoUsuario) {
        console.log("Faltan campos obligatorios."); // Log en caso de error
        return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
    }

    const query = `
        INSERT INTO Usuario (nombre, correo, contraseña, tipoUsuario)
        VALUES (?, ?, ?, ?)
    `;

    db.run(query, [nombre, correo, contraseña, tipoUsuario], (err) => {
        if (err) {
            console.error("Error al ejecutar la consulta de inserción:", err.message); // Log del error
            if (err.message.includes("UNIQUE constraint failed")) {
                res.status(400).send({ success: false, message: "El correo ya está registrado." });
            } else {
                res.status(500).send({ success: false, message: "Error interno del servidor", error: err.message });
            }
        } else {
            console.log("Usuario registrado correctamente en la base de datos."); // Confirmación
            res.status(201).send({ success: true, message: "Usuario registrado con éxito" });
        }
    });
    console.log("INFO:Nuevo usuario registrado.")
});




// Endpoint para login
router.post("/login", (req, res) => {
    const { correo, contraseña } = req.body;

    const query = `
        SELECT * FROM Usuario WHERE correo = ? AND contraseña = ?
    `;

    db.get(query, [correo, contraseña], (err, row) => {
        if (err) {
            res.status(500).send({ success: false, message: "Error interno del servidor" });
        } else if (row) {
            res.status(200).send({ success: true, message: "Inicio de sesión exitoso", user: row });
        } else {
            res.status(401).send({ success: false, message: "Credenciales incorrectas" });
        }
    });
    console.log(`INFO: El usuario ${correo}, inicio sesión correctamente.`)
});

// Endpoint para obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    const query = "SELECT * FROM Usuario";

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).send({ success: false, message: "Error interno del servidor" });
        } else {
            res.status(200).send({ success: true, message: "Usuarios obtenidos con éxito", users: rows });
        }
    });
    console.log("INFO: Se obtuvieron todos los usuarios.")
});

// Endpoint para solicitar recuperación de contraseña
router.post("/recuperarContrasena", (req, res) => {
    const { correo } = req.body;

    const query = "SELECT * FROM Usuario WHERE correo = ?";
    db.get(query, [correo], (err, row) => {
        if (err) {
            return res.status(500).send({ message: "Error interno", error: err });
        }
        if (!row) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expiration = Date.now() + 3600000; // Token válido por 1 hora

        const updateQuery = `
            UPDATE Usuario
            SET resetToken = ?, resetTokenExpiration = ?
            WHERE idUsuario = ?
        `;

        db.run(updateQuery, [token, expiration, row.idUsuario], (err) => {
            if (err) {
                return res.status(500).send({ message: "Error al guardar el token", error: err });
            }

            const recoveryLink = `http://localhost:3000/reset-password/${token}`;

            const mailOptions = {
                from: 'jobjoin.help@gmail.com',
                to: correo,
                subject: 'Recuperación de Contraseña',
                text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${recoveryLink}`
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    return res.status(500).send({ message: "Error al enviar el correo", error });
                }
                res.status(200).send({ message: "Correo enviado correctamente" });
            });
        });
    });
});

// Endpoint para restablecer contraseña
router.post("/recuperarContrasenaStep1", (req, res) => {
    const { token, nuevaContraseña } = req.body;

    const query = `
        SELECT * FROM Usuario
        WHERE resetToken = ? AND resetTokenExpiration > ?
    `;
    db.get(query, [token, Date.now()], (err, row) => {
        if (err) {
            return res.status(500).send({ message: "Error interno", error: err });
        }
        if (!row) {
            return res.status(400).send({ message: "Token inválido o expirado" });
        }

        const bcrypt = require("bcryptjs");
        bcrypt.hash(nuevaContraseña, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).send({ message: "Error al encriptar la contraseña", error: err });
            }

            const updateQuery = `
                UPDATE Usuario
                SET contraseña = ?, resetToken = NULL, resetTokenExpiration = NULL
                WHERE idUsuario = ?
            `;

            db.run(updateQuery, [hashedPassword, row.idUsuario], (err) => {
                if (err) {
                    return res.status(500).send({ message: "Error al actualizar la contraseña", error: err });
                }
                res.status(200).send({ message: "Contraseña restablecida correctamente" });
            });
        });
    });
});

// Endpoint para reiniciar la secuencia de la tabla Usuario
router.post("/reiniciarSecuencia", (req, res) => {
    db.run("DELETE FROM sqlite_sequence WHERE name = 'Usuario'", (err) => {
        if (err) {
            return res.status(500).send({ message: "Error al reiniciar la secuencia", error: err.message });
        }
        res.status(200).send({ message: "Secuencia reiniciada correctamente" });
    });
});

export default router;
