import { Request, RequestHandler, Response } from 'express';

import HttpStatus from '../../../../utils/http_status';

const getUsers: RequestHandler = (_: Request, res: Response): void => {
  res.status(HttpStatus.OK).json({ users: [] });
};

const getUser: RequestHandler = (req: Request, res: Response): void => {
  const { userId } = req.params;

  res.status(HttpStatus.NOT_FOUND).json({ userId });
};

export { getUser, getUsers };
