import request from 'supertest';
import app from '../app';

let testTaskId = '552b3139-aa17-43e1-a76e-65c28c62dd04';

describe('Task API', () => {
  it('should get a specific task by ID', async () => {
    const response = await request(app).get(`/task/${testTaskId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe('552b3139-aa17-43e1-a76e-65c28c62dd04');
  });

  it('should return a 404 status when a task is not found', async () => {
    const response = await request(app).get('/task/999');
    expect(response.status).toBe(404);
  });

  it('should create a new task', async () => {
    const newTask = {
      title: "New Task",
      description: "New Task Description",
      due_date: "10/10/2023",
      assign_to: "Doe",
      category: "history",
      status: "pending"
    }

    const response = await request(app)
      .post('/task')
      .send(newTask);

    testTaskId = response.body.id;
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task Created');
  });

  it('should update a task by ID', async () => {
    const updatedTask = {
      title: 'Updated Task',
      description: 'Updated Description',
    };

    const response = await request(app)
      .put(`/task/${testTaskId}`)
      .send(updatedTask);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task updated successfully');
  });

  it('should return a 404 status when updating a non-existent task', async () => {
    const updatedTask = {
      title: 'Updated Task',
      description: 'Updated Description',
    };

    const response = await request(app)
      .put('/task/999')
      .send(updatedTask);

    expect(response.status).toBe(404);
  });

  it('should delete a task by ID', async () => {
    const response = await request(app).delete(`/task/${testTaskId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task deleted successfully');
  });

  it('should return a 404 status when deleting a non-existent task', async () => {
    const response = await request(app).delete('/tasks/999');
    expect(response.status).toBe(404);
  });
});