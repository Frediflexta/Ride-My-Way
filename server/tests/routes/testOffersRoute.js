import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route GET/api/v1/rides', () => {
  it('should return a status 200 if OK', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides');
      res.should.have.status(200);
    } catch (err) {
      throw err;
    }
  });
});

 describe('Route GET/api/v1/rides/:rideId', () => {
  it('should return a status 200 if OK', async () => {
    const res = await chai.request(app)
    .get('/api/v1/rides/:rideId');
    res.should.have.status(200);
  })

  it('should return status 404 if Not Found', async () => {
    const res = await chai.request(app)
    .get('/api/v1/rides/:rideId');
    res.should.have.status(404);
  });
});
