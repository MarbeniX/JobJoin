import express from "express";

import db from "../db/connection.js"
const router = express.Router()
// Middleware para procesar JSON

router.use(express.json());
// Endpoint para registrar un usuario
router.post("/register", (req, res) => {
    console.log(req.body);
    const { nombre, correo, contraseña, tipoUsuario } = req.body;

    const query = `
        INSERT INTO Usuario (nombre, correo, contraseña, tipoUsuario)
        VALUES (?, ?, ?, ?)
    `;

    db.run(query, [nombre, correo, contraseña, tipoUsuario], (err) => {
        if (err) {
            res.status(400).send({ success: false, message: "Error al registrar usuario", error: err.message });
        } else {
            res.status(201).send({ success: true, message: "Usuario registrado con éxito" });
        }
    });
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
});

export default router;
