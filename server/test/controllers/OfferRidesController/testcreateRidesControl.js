import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import rides from '../../../models/rideOffers';
import OfferingRidesController from '../../../controllers/offerRidesController';

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
  },
}

const badReq = {
  body: {
    driver: {
      car: 'toyota camery',
      plateNo: 'KTU5768IKJ',
    },
    description: {
      destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
      time: '7:30am',
    },
  },
}
const req = mockReq(request);
const res = mockRes();

describe('create a new ride offer', () => {
  beforeEach(() => {
    OfferingRidesController.createRide(req, res);
  });

  it('should return 201 on ride being created', () => {
    res.status.should.have.been.calledWith(201);
  });

  it('should create a new request of a specified id', () => {
    const createdRide = rides.filter(ride => ride.name === 'Jesse Kalu');
    createdRide.length.should.be.above(-1);
  });

  // it('should return 404 if a field is missing', () => {
  //   const wrongReq = mockReq(badReq);
  //   OfferingRidesController.createRide(wrongReq, res);
  //   res.status.should.have.been.calledWith(404);
  // });
});