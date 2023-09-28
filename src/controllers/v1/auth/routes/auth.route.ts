import { RequestHandler } from 'express';
import { sign } from 'jsonwebtoken';

import HttpStatus from '../../../../utils/http_status';

const auth: RequestHandler = (_, res) => {
  const expiresIn = 7200;
  const token = sign({
    email: 'example@email.com',
    id: 1,
    name: 'Example',
  }, process.env.TOKEN_SECRET as string, { expiresIn });
  return res.status(HttpStatus.OK).json({ token, expiresIn });
};

export { auth };
