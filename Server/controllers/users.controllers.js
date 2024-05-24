import { pool } from '../configuration/db.js';

export const getUsers = async (req, res) => {
    try {
        const [users] = await pool.query('SELECT * FROM empleados ORDER BY nombre ASC');
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUser = async (req, res) => {
    try {
        const [users] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id]);
        if (users.length === 0) {
            res.status(404).json({message: 'No se encontro el usuario'});
        }else {
            res.json(users);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createUser = async (req, res) => {
    try {
        const {id, nombre, apellido, sexo, salario, dias_trabajo} = req.body;
        const results = await pool.query('INSERT INTO empleados (id, nombre, apellido, sexo, salario, dias_trabajo) VALUES (?, ?, ?, ?, ?, ?)', [id, nombre, apellido, sexo, salario, dias_trabajo]);
        res.send('Creando usuario');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        await pool.query('UPDATE empleados SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json({message: 'Usuario actualizado'});
    }   
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try{
        await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id]);
        res.json({message: 'Usuario eliminado'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}