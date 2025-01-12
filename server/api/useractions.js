import express from "express";

import db from "../db/connection.js"
const router = express.Router()
// Middleware para procesar JSON

router.use(express.json());



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

export default router;
