const request = require('supertest');

const server = require('../api/server.js');

describe('jokes router', function() {
    describe('GET /api/jokes', function() {
        it('should return JSON', function() {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })

        it('should return 400 for no credentials', function() {
            return request(server)
                .get('/api/jokes')
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })
    })
})