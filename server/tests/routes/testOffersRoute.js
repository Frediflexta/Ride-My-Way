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
      .get('/api/v1/rides/1');
      res.should.have.status(200);
    } catch (err) {
      throw err;
    }
  });

  it('should return status 404 if Not Found', async () => {
    try {
      const res = await chai.request(app)
      .get('/api/v1/rides/10')
      res.should.have.status(404);
    } catch (err) {
      throw err;
    }
  });
});

describe('Route POST /rides/1/requests', () => {
  it('should return status 201 if Created', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/rides/1/requests')
      .send({
        id: 1,
        driver: {
          name: 'Jesse Kalu',
          car: 'toyota camery',
          plateNo: 'KTU5768IKJ',
        },
        description: {
          destination: {
            from: 'ikeja',
            to: 'Eko-Hotels, Victoria Island',
          },
          time: '7:30am',
        },
        price: 1500,
      });
      res.should.have.status(201);
    } catch (err) {
      throw err;
    }
  });

  it('should return status 404 if request is Not Found', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/10/requests')
      .send({
        id: 1,
        driver: {
          name: 'Jesse Kalu',
          car: 'toyota camery',
          plateNo: 'KTU5768IKJ',
        },
        description: {
          destination: {
            from: 'ikeja',
            to: 'Eko-Hotels, Victoria Island',
          },
          time: '7:30am',
        },
        price: 1500,
      })
    } catch (err) {
      throw err;
    }
  })
});
