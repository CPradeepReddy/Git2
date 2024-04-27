// tests/usersEndToEnd.test.js
const request = require('supertest');
const app = require('../index'); // assuming your Express app instance is exported from app.js
const chai = import('chai');
const expect = chai.expect;

// tests/usersEndToEnd.test.js


describe('End to End Tests for User Authentication and GET /users/:id', () => {
  let authToken = '';
  let username ='';

  describe('POST /login/login', () => {
    it('should be able to Login with Valid Login', (done) => {
      request(app)
        .post(`/login/login`)
        .send({ username: 'test_user', password: 'test_password' })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          authToken = res.body.token;
          console.log(authToken);
          done();
        });
        
    });
  })  
  const PostId=1;
  describe('GET /Posts/${PostId}', () => {
    it('should be able to get Post detils by Id', (done) => {
      request(app)
        .get(`/Posts/${PostId}`)
        
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
        
    });
  })  
});
