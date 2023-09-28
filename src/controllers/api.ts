import { Application } from 'express';

import v1 from './v1';

export const loadApiEndpoints = (app: Application): void => {
  app.use('/api/v1', v1);
};
