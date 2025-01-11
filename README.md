PARA EJECUTAR EL PROYECTO:

Al instalar el proyecto se tiene que usar el comando:
- npm install

Seguido de estas la instalación gloabl de:
- npm install concurrently --save-dev
- npm install nodemon --save-dev

Los comandos de ejecución son:
Inicio del cliente ("frontend"):
- npm run dev
Inicio del servidor ("backend"):
- npm run dev:server
Inicio simultáneo:
- npm run dev:all

--- 

Se tiene que agregar las dependecias
-  npm install axios 
-  npm install express sqlite3 body-parser cors

se tiene que crear la base local con "sqlite3 jobjoin.db" localmente y salir, los scritps ya tienen las instrucciones para crear las tablas en caso de no existir, se levanta una servidor con "node server.js" y se tendría que ver algo así: 
"Tablas creadas correctamente (si no existían)."
"Servidor corriendo en http://localhost:5000"
"Conexión exitosa a SQLite"

