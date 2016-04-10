import jasmine from 'gulp-jasmine';
import app from '../app';
import request from 'supertest';

describe('index route', () => {
  describe('get', () => {
    it('responds with a 200', (done) => {
      request(app).get('/index').expect(200, done);
    });
  });
});