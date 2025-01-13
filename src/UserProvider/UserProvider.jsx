import React, { createContext, useContext, useState, useEffect } from "react";

// Creación de contextos
const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cargar usuario desde el local storage al montar el componente
    useEffect(() => {
        try {
            const savedUser = JSON.parse(localStorage.getItem("user"));
            console.log("usuario cargado desde LocalStorage", savedUser);
            if (savedUser) {
                setUser(savedUser);
            }
        } catch (error) {
            console.error("Error al cargar desde localStorage", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Guardar usuario en local storage cada vez que cambie
    useEffect(() => {
        if (user) {
            console.log("Guardando usuario en localStorage:", user);
            localStorage.setItem("user", JSON.stringify(user));
        } else if(user !== null) {
            console.log("Limpiando usuario de localStorage");
            localStorage.removeItem("user"); // Limpia el localStorage si el usuario es null
        }
    }, [user]);

    if(loading){    
        return <div>Cargando...</div>;
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}