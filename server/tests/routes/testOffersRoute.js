import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route GET /api/v1/rides', () => {
  it('should return status 200 if OK', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides');
      res.should.have.status(200);
    } catch (err) {
      throw err;
    }
  });
});

 describe('Route GET /api/v1/rides/:rideId', () => {
  it('should return status 200 if OK', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides/:rideId');
      res.should.have.status(200);
    } catch (err) {
      throw err;
    }
  })

  it('should return status 404 if Not Found', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides/:rideId');
      res.should.have.status(404);
    } catch (err) {
      throw err;
    }
  });
});

// describe('Route POST /rides/:rideId/requests', () => {
//   it('shouldreturn status 201 if Created', async () => {
//     try {

//     }
//   });
// });
