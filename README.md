# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Se tiene que agregar las dependecias
-  npm install axios 
-  npm install express sqlite3 body-parser cors

se tiene que crear la base local con "sqlite3 jobjoin.db" localmente y salir, los scritps ya tienen las instrucciones para crear las tablas en caso de no existir, se levanta una servidor con "node server.js" y se tendría que ver algo así: 
"Tablas creadas correctamente (si no existían)."
"Servidor corriendo en http://localhost:5000"
"Conexión exitosa a SQLite"