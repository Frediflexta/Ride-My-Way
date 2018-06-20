import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route GET/api/v1/rides', () => {
  it('should return a status 200', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides');
      res.should.have.status(200);
    } catch (err) {
      throw err;
    }
  });
});
