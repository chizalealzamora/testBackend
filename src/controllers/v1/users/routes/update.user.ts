import { RequestHandler } from 'express';

import HttpStatus from '../../../../utils/http_status';

const updateUser: RequestHandler = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(HttpStatus.BAD_REQUEST).json({ updated: false });
  }

  return res.status(HttpStatus.OK).json({ updated: true, userId });
};

export { updateUser };
