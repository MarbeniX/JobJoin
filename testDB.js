import axios from "axios";

const testLogin = async () => {
    const API_URL = "http://localhost:5000/login"; // Cambia el puerto si es necesario

    // Credenciales de prueba
    const testCredentials = [
        { email: "test@example.com", password: "123456" }, // Credenciales válidas
        { email: "invalid@example.com", password: "wrongpassword" }, // Email incorrecto
        { email: "test@example.com", password: "wrongpassword" }, // Contraseña incorrecta
        { email: "", password: "" }, // Campos vacíos
    ];

    for (const credentials of testCredentials) {
        try {
            console.log(`Probando con: ${JSON.stringify(credentials)}`);
            const response = await axios.post(API_URL, credentials);
            console.log(`Respuesta del servidor:`, response.data);
        } catch (error) {
            if (error.response) {
                console.log(`Error del servidor:`, error.response.data);
            } else {
                console.error(`Error al conectar con el servidor:`, error.message);
            }
        }
        console.log("----------------------------");
    }
};

testLogin();
