import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route POST /api/v1/requestMade/:rideId/accept', () => {
  it('should return status 202 when accepted', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/requestMade/2/accept');
      res.should.have.status(202);
    } catch(err) {
      throw err;
    }
  });

  it('should return 400 if rideId is wrong', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/requestMade/5/accept');
      res.should.have.status(400);
    } catch(err) {
      throw err;
    }
  });
});
