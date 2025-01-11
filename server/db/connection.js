import sqlite3 from "sqlite3";
// Configuración de SQLite
const sqlite = sqlite3.verbose();
// Conexión a la base de datos
const db = new sqlite.Database("./jobjoin.db", (err) => {
    if (err) {
        console.error("Error al conectar con SQLite:", err.message);
    } else {
        console.log("Conexión exitosa a SQLite");
    }
});

export default db;
