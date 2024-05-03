import express from 'express'
import { login, signup } from '../Controllers/user.js';
const router = express.Router();

router.post('/api/signup',signup)
router.post('/api/login',login)

export default router;