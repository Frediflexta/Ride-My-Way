import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Route POST /api/v1/requestMade/accept', () => {
  it('should return status 202 when accepted', async () => {
    try {
      const res = await chai.request(app)
      .post('/api/v1/requestMade/accept')
      .send({
        id: 1,
        rider: {
          name: 'Jesse Ade',
          phoneNumber: 90912352876,
          image: 'https://imageicon.com/coed',
        },
        description: {
          destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
          time: '7:30am',
        },
        price: 1500,
      });
      res.should.have.status(202);
    } catch(err) {
      throw err;
    }

  })
});
