import express from 'express'
import { signup } from '../Controllers/user.js';
const router = express.Router();

router.post('/api/signup',signup)

export default router;