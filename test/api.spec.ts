import request from 'supertest';

import app from '../src/app';
import HttpStatus from '../src/utils/http_status';

describe('GET /api', () => {
  it('should return 404 Not found', () => {
    return request(app).get('/api').expect(HttpStatus.NOT_FOUND);
  });
});
