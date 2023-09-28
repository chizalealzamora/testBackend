import { Router } from 'express';

import { createUser } from './routes/create.user';
import { deleteUser } from './routes/delete.user';
import { getUser, getUsers } from './routes/get.user';
import { updateUser } from './routes/update.user';

const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;
