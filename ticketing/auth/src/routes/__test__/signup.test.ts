import request from 'supertest';
import { app } from '../../app';

it('return a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            emnail: 'test@test.com',
            password: 'password'
        })
        .expect(400);
});

it('return a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            emnail: 'asdfasdf',
            password: 'password'
        })
        .expect(400);
});