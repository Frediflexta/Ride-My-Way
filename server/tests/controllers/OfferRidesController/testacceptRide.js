import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import OfferingRidesController from '../../../controllers/offerRidesController';
import requestMade from '../../../models/rideRequests';

chai.use(sinonChai);
chai.should();

const request = {
  body: {
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
  },
}

const req = mockReq(request);
const res = mockRes();

describe('accept requests made to join your ride', () => {
  beforeEach(() => {
    OfferingRidesController.acceptRide(req, res);
  });

  it('should return 201 on success', () => {
    res.status.should.have.been.calledWith(201);
  });

  it('should create a new ride in requestMade', () => {
    const newRide = requestMade.filter(madeRiquest => madeRiquest.rider.name === 'Jesse Ade');

    newRide.length.should.be.above(0);
  });
});