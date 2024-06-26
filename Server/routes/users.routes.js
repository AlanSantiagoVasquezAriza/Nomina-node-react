import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.put('/users/:id', updateUser);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser);

export default router;