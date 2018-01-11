const assert = require('assert');
const express = require('express');
const request = require('supertest');
const app = express();

// Here is where spliting the application configuration from the server init
// code comes in handy. We can now, test the application with the actual
// settings that we have configured in the real app instead of creating an
// exact replica.
require('application')(app);
require('routes')(app);

app.listen(3030);

describe('Basic application endpoint test', () => {
  it('GET to index should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('GET to /healthz should return 200', (done) => {
    request(app)
      .get('/healthz')
      .expect(200, done);
  });
});
