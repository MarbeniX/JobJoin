import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import db from "./db/connection.js"
import userActions from "./api/useractions.js"
import userActions2 from "./api/useractions2.js"
import userActions3 from "./api/useractions3.js"

// Configuración de Express
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

    // Crear tablas si no existen
    db.serialize(() => {
    // Tabla Usuario
    db.run(`
        CREATE TABLE IF NOT EXISTS Usuario (
            idUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            correo TEXT NOT NULL UNIQUE,
            contraseña TEXT NOT NULL,
            tipoUsuario TEXT CHECK(tipoUsuario IN ('Administrador', 'Empleador', 'Empleado')) NOT NULL,
            resetToken TEXT,
            resetTokenExpiration INTEGER
        )
    `);
    // Tabla Administrador
    db.run(`
        CREATE TABLE IF NOT EXISTS Administrador (
            idAdministrador INTEGER PRIMARY KEY,
            FOREIGN KEY (idAdministrador) REFERENCES Usuario(idUsuario)
        )
    `);

    // Tabla Empleado
    db.run(`
        CREATE TABLE IF NOT EXISTS Empleado (
            idEmpleado INTEGER PRIMARY KEY,
            location TEXT NOT NULL,
            habilidades TEXT NOT NULL,
            calificacionesPromedio REAL DEFAULT 0,
            disponibilidad TEXT DEFAULT 'disponible',
            tariff REAL NOT NULL,
            phone TEXT NOT NULL,
            description TEXT NOT NULL,
            FOREIGN KEY (idEmpleado) REFERENCES Usuario(idUsuario)
        )
    `);


    // Tabla Empleador
    db.run(`
        CREATE TABLE IF NOT EXISTS Empleador (
            idEmpleador INTEGER PRIMARY KEY,
            FOREIGN KEY (idEmpleador) REFERENCES Usuario(idUsuario)
        )
    `);

    // Tabla Perfil
    db.run(`
        CREATE TABLE IF NOT EXISTS Perfil (
            idPerfil INTEGER PRIMARY KEY AUTOINCREMENT,
            idEmpleado INTEGER NOT NULL,
            descripcion TEXT NOT NULL,
            habilidades TEXT NOT NULL,
            fotoPerfil TEXT,
            FOREIGN KEY (idEmpleado) REFERENCES Empleado(idEmpleado)
        )
    `);

    // Tabla Proyecto
    db.run(`
        CREATE TABLE IF NOT EXISTS Proyecto (
            idProyecto INTEGER PRIMARY KEY AUTOINCREMENT,
            idEmpleador INTEGER NOT NULL,
            idEmpleado INTEGER,
            descripcionProyecto TEXT NOT NULL,
            estado TEXT CHECK(estado IN ('Pendiente', 'En Proceso', 'Completado')) NOT NULL,
            plazo DATE NOT NULL,
            FOREIGN KEY (idEmpleador) REFERENCES Empleador(idEmpleador),
            FOREIGN KEY (idEmpleado) REFERENCES Empleado(idEmpleado)
        )
    `);

    // Tabla Geolocalización
    db.run(`
        CREATE TABLE IF NOT EXISTS Geolocalizacion (
            idGeolocalizacion INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario INTEGER NOT NULL,
            coordenadas TEXT NOT NULL,
            FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
        )
    `);

    // Tabla Calificación
    db.run(`
        CREATE TABLE IF NOT EXISTS Calificacion (
            idCalificacion INTEGER PRIMARY KEY AUTOINCREMENT,
            idProyecto INTEGER NOT NULL,
            idEmpleado INTEGER NOT NULL,
            calificacion INTEGER CHECK(calificacion BETWEEN 1 AND 5),
            comentario TEXT,
            fecha DATE NOT NULL,
            FOREIGN KEY (idProyecto) REFERENCES Proyecto(idProyecto),
            FOREIGN KEY (idEmpleado) REFERENCES Empleado(idEmpleado)
        )
    `);

    console.log("Tablas creadas correctamente (si no existían).");
});
// Middleware para procesar JSON
app.use(express.json());
// Endpoint para las acciones del usuario
app.use('/users', userActions);
app.use('/password', userActions2);
app.use('/trabajador', userActions3);
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
