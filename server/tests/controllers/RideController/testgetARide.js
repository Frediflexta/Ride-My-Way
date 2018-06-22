import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import rides from '../../../models/rideOffers';
import RidesController from '../../../controllers/ridesController';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
    driver: {
      name: 'Jesse Kalu',
      car: 'toyota camery',
      plateNo: 'KTU5768IKJ',
    },
    description: {
      destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
      time: '7:30am',
    },
    price: 1500,
  },
  params: {
    rideId: 1,
  }
};

const badRequest = {
  body: {
    driver: {
      name: 'Jesse Kalu',
      car: 'toyota camery',
      plateNo: 'KTU5768IKJ',
    },
    description: {
      destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
      time: '7:30am',
    },
    price: 1500,
  },
  params: {
  rideId: 10,
  }
};

const req = mockReq(request);
const res = mockRes();

describe('get a ride method', () => {
  beforeEach(() => {
    RidesController.getARide(req, res);
  });

  it('should return 200 on success', () => {
    res.status.should.have.been.calledWith(200);
  });

  it('should get a ride with specified id', () => {
    RidesController.getARide(req, res);
    const rideFound = rides.findIndex(ride => ride.name === req.body.name);
    rideFound.should.have.been.above(-1);
  });

  it('should return 404 if no ride with specified id is available', () => {
    const wrongReq = mockReq(badRequest);
    RidesController.getARide(wrongReq, res);
    res.status.should.have.been.calledWith(404);
  });
});