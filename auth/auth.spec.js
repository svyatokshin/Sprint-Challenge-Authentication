const request = require('supertest');
const db = require('../database/dbConfig.js');
const Users = require('./auth-model.js');
const server = require('../api/server.js');

describe('auth router', function() {
    describe('POST /api/auth/register', function() {
        it('should save a new user to db by confirming with 201', async function() {
            const response = await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'Svyat1',
                    password: 'pass'
                })
            
                .expect(201);
        })

        it('should return 500 Internal Error for duplicate user created', async function() {
            const res = await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'Svyat1',
                    password: 'pass'
                })
                .expect(500);
        })
    })

    describe('POST /api/auth/login', function() {
        it('should login user and return 200', async function() {
            const res = await request(server)
                .post('/api/auth/login')
                .send({
                    username: 'Svyat1',
                    password: 'pass'
                })
                .expect(200)
        })

        it('should return 401 because of invalid credentials', async function() {
            const res = await request(server)
                .post('/api/auth/login')
                .send({
                    username: 'Svyat2',
                    password: 'pass'
                })
                .expect(401)
        })
    })
})