const request = require('supertest');
const app = require('./app');


//imtergration test
describe('GET /api/hello', () => {
  it('should return status 200', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
  });



//unit test 

  it('return JSON content-type', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('return a message field in the body', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.body).toHaveProperty('message');
  });
});
    


