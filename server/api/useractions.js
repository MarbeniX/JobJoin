import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import db from "../db/connection.js"
import fs from "fs";
import multer from "multer";
import path from "path";
import { type } from "os";
import { redirect } from "react-router-dom";

const router = express.Router()
// Middleware para procesar JSON

router.use(express.json());

const OAuth2 = google.auth.OAuth2;

// Leer el archivo JSON de manera síncrona
const accountTransport = JSON.parse(fs.readFileSync('./server/api/account_transport.json', 'utf-8'));

const mail_rover = async (callback) => {
    const oauth2Client = new OAuth2(
        accountTransport.auth.clientId,
        accountTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );
    oauth2Client.setCredentials({
        refresh_token: accountTransport.auth.refreshToken,
    });
    //Obten el accessToken
    oauth2Client.getAccessToken((err, token) => {
        if (err)
            return console.log("Error en la obtencion del token de google: ",err);;
        accountTransport.auth.accessToken = token;
        const transporter = nodemailer.createTransport(accountTransport);
        callback(nodemailer.createTransport(accountTransport));
    });
};
    //configuracion de multer para almacenamiento de archivos
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/uploads');
        },
        filename: (req, file, cb) => {
            cb(null,  + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    const upload = multer({ storage: storage });

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

// Endpoint para registrar un usuario
router.post("/register", (req, res) => {
    const { nombre, correo, contraseña, tipoUsuario } = req.body;

    console.log("Datos recibidos en el registro:", req.body); // Log para ver qué datos llegan

    if (!nombre || !correo || !contraseña || !tipoUsuario) {
        console.log("Faltan campos obligatorios."); // Log en caso de error
        return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
    }

    // Iniciar transacción
    db.serialize(() => {
        db.run("BEGIN TRANSACTION;", (err) => {
            if (err) {
                return res.status(500).send({ success: false, message: "Error al iniciar la transacción" });
            }

            // Ejecutar inserción
            const query = `
                INSERT INTO Usuario (nombre, correo, contraseña, tipoUsuario)
                VALUES (?, ?, ?, ?)
            `;

            db.run(query, [nombre, correo, contraseña, tipoUsuario], function(err) {
                if (err) {
                    console.error("Error al ejecutar la consulta de inserción:", err.message);
                    // Revertir los cambios si hubo un error
                    db.run("ROLLBACK;", (err) => {
                        if (err) {
                            console.error("Error al revertir la transacción:", err.message);
                        }
                    });
                    if (err.message.includes("UNIQUE constraint failed")) {
                        return res.status(400).send({ success: false, message: "El correo ya está registrado." });
                    } else {
                        return res.status(500).send({ success: false, message: "Error interno del servidor", error: err.message });
                    }
                } else {
                    console.log("Usuario registrado correctamente en la base de datos.");

                    // Confirmar la transacción si todo salió bien
                    db.run("COMMIT;", (err) => {
                        if (err) {
                            return res.status(500).send({ success: false, message: "Error al confirmar la transacción" });
                        }
                        res.status(201).send({ success: true, message: "Usuario registrado con éxito" });
                    });
                }
            });
        });
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
    console.log(`INFO: El usuario ${correo}, inicio sesión correctamente.`)
});

// Endpoint para obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    const query = "SELECT * FROM Empleado"; //Modificar segun tu necesidad
    {/* SELECT * FROM Empleado */}
    {/* SELECT * FROM Usuario */}
    {/* PRAGMA table_info(Empleado) */}
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
    console.log("Correo recibido:", correo);

    const query = "SELECT * FROM Usuario WHERE correo = ?";
    db.get(query, [correo], (err, row) => {
        if (err) {
            console.error("Error al buscar usuario:", err.message);
            return res.status(500).send({ message: "Error interno", error: err });
        }
        if (!row) {
            console.log("Usuario no encontrado");
            return res.status(404).send({ message: "Usuario no encontrado" });
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expiration = Date.now() + 3600000; // Token válido por 1 hora
        console.log("Token de recuperación:", token);
        // Iniciar transacción
        db.serialize(() => {
            db.run("BEGIN TRANSACTION;", (err) => {
                if (err) {
                    return res.status(500).send({ message: "Error al iniciar la transacción" });
                }

                // Actualizar el token de recuperación
                const updateQuery = `
                    UPDATE Usuario
                    SET resetToken = ?, resetTokenExpiration = ?
                    WHERE idUsuario = ?
                `;

                db.run(updateQuery, [token, expiration, row.idUsuario], (err) => {
                    if (err) {
                        db.run("ROLLBACK;");
                        e.error("Error al actualizar el token:", err.message); 
                        return res.status(500).send({ message: "Error al guardar el token: ", error: err });
                    }
                    console.log("Token guardado en la base de datos correctamente.");

                    mail_rover((transporter) => {
                        // Enviar correo de recuperación
                        const recoveryLink = `http://localhost:5173/recuperarContrasenaStep1`;
                        // Configuración de Nodemailer
                        const mailOptions = {
                            from: 'jobjoin.help@gmail.com', 
                            to: correo, subject: 'Recupera tu Contraseña de JobJoin', 
                            html: `<div style="text-align: center;">
                                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/2q5WDkM/NaN.jpg" alt="NaN" border="0" style="width:250px; height auto;" > </a>
                                        <p> <a href="${recoveryLink}"> Haz clic aquí </a> o ve al siguiente enlace para restablecer tu contraseña:<br> ${recoveryLink}</p> 
                                        <p> y pega este código:<br> ${token}</p>
                                        <br> <p>Si no solicitaste un cambio de contraseña, ignora este mensaje.</p>
                                        <div  style "text-align: left;"> <br> <p>Gracias por usar JobJoin.</p> </div>
                                        <a href="https://imgbb.com/"><img src="https://i.ibb.co/PN2CKQS/Footer.png" alt="Footer" border="0" style="width:250px; height auto;" ></a>
                                    </div
                            
                            <br> <br>`
                        };
                        //Enviar el correo
                        transporter.sendMail(mailOptions, (error) => {
                            if (error) {
                                db.run("ROLLBACK;");
                                console.error("Error al enviar el correo:", error);
                                return res.status(500).send({ message: "Error al enviar el correo", error });
                            }

                             // Confirmar transacción si todo ha sido exitoso
                            db.run("COMMIT;", (err) => {
                                if (err) {
                                    return res.status(500).send({ message: "Error al confirmar la transacción" });
                                }
                                console.log("Correo de recuperación enviado correctamente.");
                                res.status(200).send({ message: "Correo enviado correctamente" });
                        });
                    });
                });
            });
        });
    });
});


// Endpoint para validar el token
router.post("/recuperarContrasenaStep1", (req, res) => {
    const { token } = req.body;
    
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

        // Si el token es válido, redirigimos a un segundo paso donde se cambia la contraseña
        res.status(200).send({ 
            message: "Token válido", 
            userId: row.idUsuario,
            redirectTo: "/crear-nueva-contrasena"
        });
    });
});

// Endpoint para cambiar la contraseña
router.post("/crearNuevaContrasena", (req, res) => {
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

        const bcrypt = require("bcryptjs");
        bcrypt.hash(nuevaContraseña, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Error al encriptar la contraseña:", err);
                return res.status(500).send({ message: "Error al encriptar la contraseña", error: err });
            }
            console.log("Contraseña encriptada correctamente");

            const updateQuery = `
                UPDATE Usuario
                SET contraseña = ?, resetToken = NULL, resetTokenExpiration = NULL
                WHERE idUsuario = ?
            `;
            db.run(updateQuery, [hashedPassword, userId], (err) => {
                if (err) {
                    console.error("Error al actualizar la contraseña en la base de datos:", err);
                    return res.status(500).send({ message: "Error al actualizar la contraseña", error: err });
                }
                console.log("Contraseña actualizada correctamente para el usuario con idUsuario:", userId);
                res.status(200).send({ message: "Contraseña restablecida correctamente", redirectTo: "/login"});
            });
        });
    });
});

//Endpoint para crear perfil de trabajador
router.post("/crear-trabajador", upload.single("fotoPerfil"), (req, res) => {
    console.log("Datos recibidos en el perfil:", req.body);
    const { location, service, tariff, phone, description, userId } = req.body;
    const fotoPerfil = req.file ? req.file.filename : null;

    //Verificar si todos los campos estan presentes en el cuerpo de la solicitud
    if (!location || !service || !tariff || !phone || !description || !userId) {
        return res.status(400).send({ success: false, message: "Todos los campos son obligatorios" });
    }

    const query = `
        INSERT INTO Perfil (idEmpleado, descripcion, habilidades, fotoPerfil)
        VALUES (?, ?, ?, ?)
    `;
    // Ejecutar la consulta
    db.run(query, [userId, description, service, fotoPerfil, location, tariff, phone], function (err) {
        if (err) {
            return res.status(500).send({ success: false, message: "Error interno al crear el perfil", error: err });
        }
        // Responder con éxito y el ID del perfil recién creado
        res.status(201).send({ success: true, message: "Perfil creado correctamente", perfilId: this.lastID });
    });
});


// Endpoint para reiniciar la secuencia de la tabla Usuario
router.post("/reiniciarSecuencia", (req, res) => {
    // Iniciar la transacción
    db.serialize(() => {
        db.run("BEGIN TRANSACTION;", (err) => {
            if (err) {
                return res.status(500).send({ message: "Error al iniciar la transacción", error: err.message });
            }

            // Ejecutar el DELETE para reiniciar la secuencia
            db.run("DELETE FROM sqlite_sequence WHERE name = 'Usuario'", (err) => {
                if (err) {
                    // Si ocurre un error, hacer rollback de la transacción
                    db.run("ROLLBACK;", (rollbackErr) => {
                        if (rollbackErr) {
                            console.error("Error al revertir la transacción:", rollbackErr.message);
                        }
                    });
                    return res.status(500).send({ message: "Error al reiniciar la secuencia", error: err.message });
                }

                // Confirmar la transacción
                db.run("COMMIT;", (commitErr) => {
                    if (commitErr) {
                        return res.status(500).send({ message: "Error al confirmar la transacción", error: commitErr.message });
                    }
                    res.status(200).send({ message: "Secuencia reiniciada correctamente" });
                });
            });
        });
    });
});

});
export default router;
