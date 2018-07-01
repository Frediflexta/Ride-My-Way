import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import OfferingRidesController from '../../../controllers/offerRidesController';
import rides from '../../../models/rideOffers';

chai.use(sinonChai);
chai.should();

const request = {
  body: {
    rider: {
      name: 'Jesse Ade',
      phoneNumber: 90912352876,
      image: 'https://imageicon.com/coed',
    },
    description: {
      destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
      time: '7:30am',
    },
  },
  params: {
    rideId: 2
  }
}

const badReq = {
  body: {
    rider: {
      name: 'Jesse Ade',
      phoneNumber: 90912352876,
      image: 'https://imageicon.com/coed',
    },
    description: {
      destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
      time: '7:30am',
    },
  },
  params: {
    rideId: 5
  }
}

const req = mockReq(request);
const res = mockRes();

describe('accept requests of a specific id made to join your ride', () => {
  beforeEach(() => {
    OfferingRidesController.acceptRide(req, res);
  });

  it('should return 201 on success', () => {
    res.status.should.have.been.calledWith(202);
  });

  it('should create(accept) a ride in requestMade', () => {
    const accepted = rides.filter(accept => accept.rideId === 2);
    accepted.length.should.be.above(-1);
  });
});