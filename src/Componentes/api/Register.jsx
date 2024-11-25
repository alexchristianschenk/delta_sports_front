import { useState } from "react";
import api from './api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
e.preventDefault();
try{
    await api.post('/usuarios/register', {username, password});
    alert('Usuario registrado con éxito');
} catch(error){
    alert ('Error al registrar:  '+ error.responde.data);
}
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            <input type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <button type="submit">Registrar</button>
        </form>
    );
};
export default Register;