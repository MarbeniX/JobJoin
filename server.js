import sqlite3 from "sqlite3";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Configuración de SQLite
const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./jobjoin.db", (err) => {
    if (err) {
        console.error("Error al conectar con SQLite:", err.message);
    } else {
        console.log("Conexión exitosa a SQLite");
    }
});

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
            tipoUsuario TEXT CHECK(tipoUsuario IN ('Administrador', 'Empleador', 'Empleado')) NOT NULL
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
            habilidades TEXT NOT NULL,
            calificacionesPromedio REAL,
            disponibilidad TEXT,
            tarifaPorHora REAL NOT NULL,
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

// Endpoint para registrar un usuario
app.post("/register", (req, res) => {
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
app.post("/login", (req, res) => {
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

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
