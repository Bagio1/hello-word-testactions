const request = require('supertest');
const app = require('./app');

describe('GET /api/hello', () => {
  it('should return status 200', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
  });
});
    


