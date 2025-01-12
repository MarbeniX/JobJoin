import React, { useContext, useState, useEffect } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    //Cargar usuario desde el local storage al montar el componente
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    return (
        <userContext.Provider value={{ user, setUser }}>
                {children}
        </userContext.Provider>
    );
}