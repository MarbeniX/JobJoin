import express from "express";
import db from "../db/connection.js";

const rrouter = express.Router();

rrouter.use(express.json());

// Endpoint para crear el perfil del trabajador
rrouter.post("/crear-trabajador", (req, res) => {
    const { userId, location, habilidades, tarifaPorHora, phone, description } = req.body;

    console.log("Solicitud recibida para crear perfil de trabajador");
    console.log("Datos recibidos:", { userId, location, habilidades, tarifaPorHora, phone, description });

    // Validar que todos los campos requeridos están presentes
    if (!userId || !location || !habilidades || !tarifaPorHora || !phone || !description) {
        console.warn("Faltan datos en la solicitud");
        return res.status(400).send({ message: "Todos los campos son obligatorios" });
    }

    // Consulta SQL para insertar el perfil en la base de datos
    const insertQuery = `
        INSERT INTO Empleado (idEmpleado, location, habilidades, tarifaPorHora, phone, description)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(insertQuery, [userId, location, habilidades, tarifaPorHora, phone, description], function (err) {
        if (err) {
            console.error("Error al insertar el perfil en la base de datos:", err);
            return res.status(500).send({ message: "Error al crear el perfil", error: err });
        }

        console.log("Perfil de trabajador creado correctamente con id:", this.lastID);
        res.status(200).send({ message: "Perfil creado correctamente", profileId: this.lastID });
    });
});


export default rrouter;