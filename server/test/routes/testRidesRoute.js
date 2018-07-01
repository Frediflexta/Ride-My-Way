import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route PUT /api/v1/rides/2/requests/2/accept', () => {
  it('should return status 202 when accepted', async () => {
    try {
      const res = await chai.request(app)
      .put('/api/v1/rides/2/requests/2/accept');
      res.should.have.status(202);
    } catch(err) {
      throw err;
    }
  });

  it('should return 400 if rideId is wrong', async () => {
    try {
      const res = await chai.request(app)
      .put('/api/v1/rides/2/requests/2/accept');
      res.should.have.status(400);
    } catch(err) {
      throw err;
    }
  });
});

describe('Route PUT /api/v1/rides/1/requests/1/reject', () => {
  it('should return 204', async () => {
    try {
      const res = await chai.request(app)
      .put('/api/v1/rides/1/requests/1/reject')
      .send({
        status: 'Rejected',
      })
      res.should.have.status(202);
    } catch(err) {
      throw err;
    }
  });

  it('should return 400 if rideId is wrong', async () =>{
    try {
      const res = await chai.request(app)
      .put('/api/v1/rides/5/requests/5/reject');
      res.should.have.status(400);
    } catch(err) {
      throw err;
    }
  })
});
