
const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        //Cargar el estado de atenticación desde localStorage
        return localStorage.getItem('isAuthenticated' === 'true')
    });
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true') //Guardar en localStorage
    }
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');//Eliminar de localStorage
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);