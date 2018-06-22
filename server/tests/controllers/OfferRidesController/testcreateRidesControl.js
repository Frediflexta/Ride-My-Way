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
      time: '7:30am',
    },
    price: 1500,
  }
}

const badReq = {
  body: {
    driver: {
      name: 'Jesse Kalu',
      car: 'toyota camery',
      plateNo: 'KTU5768IKJ',
    },
    description: {
      time: '7:30am',
    },
    price: 1500,
  }
}
const req = mockReq(req);
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

  it('should return error 400 if a field is missing', () => {
    const wrongReq = mockReq(badReq);
    OfferingRidesController.createRide(wrongReq, res);
    res.status.should.have.been.calledWith(400);
  });
});