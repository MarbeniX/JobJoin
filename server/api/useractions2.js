import express from "express";
import db from "../db/connection.js";

const irouter = express.Router();

irouter.use(express.json());

// Endpoint para cambiar la contraseña
irouter.post("/crearNuevaContrasena", (req, res) => {
    const { userId, nuevaContraseña } = req.body;
    console.log("Solicitud recibida para cambiar contraseña"); // Log inicial
    console.log("Datos recibidos:", { userId, nuevaContraseña });

    const query = `
        SELECT * FROM Usuario
        WHERE idUsuario = ?
    `;
    db.get(query, [userId], (err, row) => {
        if (err) {
            console.error("Error al consultar la base de datos:", err);
            return res.status(500).send({ message: "Error interno", error: err });
        }
        if (!row) {
            console.warn("Usuario no encontrado en la base de datos con idUsuario:", userId);
            return res.status(400).send({ message: "Usuario no encontrado" });
        }
        console.log("Usuario encontrado:", row);

        // Usar la contraseña en texto plano directamente (sin encriptación)
        const updateQuery = `
            UPDATE Usuario
            SET contraseña = ?, resetToken = NULL, resetTokenExpiration = NULL
            WHERE idUsuario = ?
        `;
        db.run(updateQuery, [nuevaContraseña, userId], (err) => {
            if (err) {
                console.error("Error al actualizar la contraseña en la base de datos:", err);
                return res.status(500).send({ message: "Error al actualizar la contraseña", error: err });
            }
            console.log("Contraseña actualizada correctamente para el usuario con idUsuario:", userId);
            res.status(200).send({ message: "Contraseña restablecida correctamente", redirectTo: "/login" });
        });
    });
});

export default irouter;
