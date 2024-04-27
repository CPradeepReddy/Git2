// test/unitTest.js

const request = require('supertest');
const app = require('../index');
const chai = import('chai');
const expect = chai.expect;

describe('POST /login/login', () => {
  it('should be able to Login with Valid Login', (done) => {
    request(app)
      .post(`/login/login`)
      .send({ username: 'test_user', password: 'test_password' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        done();
      });
  });

  const userId=1;
  // Test for Route 2: Get All Users
  describe('GET /users/', () => {
    it('should be able to retrieve All users', (done) => {
      request(app)
        .get(`/users/`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
         
          done();
        });
    });
  });
});
