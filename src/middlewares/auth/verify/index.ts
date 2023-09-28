import { RequestHandler } from 'express';
import { verify } from 'jsonwebtoken';
import HttpStatus from '../../../utils/http_status';
import { SystemError } from '../../../types/system_error';

// middleware to validate token (routes that require authentication)
const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Unauthorized' });
  try {
    const secret = process.env.TOKEN_SECRET;
    if (!secret) {
      throw new SystemError('TOKEN_SECRET not found in .env file');
    }
    const verified = verify(token.replace('Bearer ', ''), secret);
    req.body.verified_data = verified;
    next();
  } catch (error) {
    if (error instanceof SystemError) {
      // TODO: Write log here
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Unauthorized' });
  }
};

export { verifyToken };