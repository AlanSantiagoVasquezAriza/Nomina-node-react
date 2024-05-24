import { useContext, useState } from "react";
import { getUsersRequest, deleteUserRequest, createUserRequest, getUserRequest, updateUserRequest } from "../services/user.service";
import { UserContext } from "./UserContext";

export const UseUsers = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUsers must be used within a UserContextProvider');
    }
    return context;
};

export const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    
    async function loadUsers() {
        try {
            const response = await getUsersRequest();
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (ID) => {
        try {
            const response = await deleteUserRequest(ID);
            setUsers(users.filter((user) => user.ID !== ID));
        } catch (error) {
            console.log(error);
        }
    }

    const createUser = async (user) => {
        try {
            const response = await createUserRequest(user);
            setUsers([...users, response.data]);
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async (ID) => {
        try {
            const response = await getUserRequest(ID);
            return response.data;
            
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (id, newFields) => {
        try {
            const response = await updateUserRequest(id, newFields);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{ users, loadUsers, deleteUser, createUser, getUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
