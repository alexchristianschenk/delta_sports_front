import { useState } from "react";
import api from './api';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
e.preventDefault();
try{
    await api.post('/users/register', {nombre, edad, password});
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
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required />
            <input type="age"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
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