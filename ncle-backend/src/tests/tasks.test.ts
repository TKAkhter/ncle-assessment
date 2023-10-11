import request from 'supertest';
import app from '../app';

const testUserName = 'Doe';
const testCategory = 'history';

describe('Tasks API', () => {
  it('should get all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get all tasks by username', async () => {
    const response = await request(app).get(`/tasks?assignedTo=${testUserName}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get all tasks by category', async () => {
    const response = await request(app).get(`/tasks?category=${testCategory}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});