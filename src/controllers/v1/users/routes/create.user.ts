import { RequestHandler } from 'express';

import HttpStatus from '../../../../utils/http_status';

const createUser: RequestHandler = (_, res) => {
  return res.status(HttpStatus.CREATED).json({ created: true });
};

export { createUser };
