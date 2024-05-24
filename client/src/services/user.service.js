import axios from 'axios';
import { PORT } from '../../../Server/configuration/config.js';

export const getUsersRequest = async () => {
    return await axios.get(`http://localhost:${PORT}/users`);
}

export const createUserRequest = async (user) => {
    await axios.post(`http://localhost:${PORT}/users`, user) 
} 

export const deleteUserRequest = async (id) => {
    await axios.delete(`http://localhost:${PORT}/users/${id}`)
}

export const getUserRequest = async (id) => {
    return await axios.get(`http://localhost:${PORT}/users/${id}`)
}

export const updateUserRequest = async (id, newUser) => {
    await axios.put(`http://localhost:${PORT}/users/${id}`, newUser)
}