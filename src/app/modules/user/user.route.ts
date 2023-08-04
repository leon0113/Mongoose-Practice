import express from 'express';
import { createUser, getAllAdmins, getUserById, getUsers } from './user.controller';

const router = express.Router();



router.post('/create-user', createUser);
router.get('/', getUsers);
router.get('/admins', getAllAdmins);
router.get('/:id', getUserById);




export default router;