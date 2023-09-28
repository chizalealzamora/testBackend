import { Router } from 'express';

import users from './users';
import auth from './auth';

const router = Router();

router.get('/', (_, res) => {
  return res.status(404);
});

router.use('/auth', auth);
router.use('/users', users);

export default router;
