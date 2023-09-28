import { Router } from 'express';
import { auth } from './routes/auth.route';
import { verifyToken } from '../../../middlewares/auth/verify';

const router = Router();

router.post('/', auth);
router.post('/refresh', verifyToken, auth);

export default router;