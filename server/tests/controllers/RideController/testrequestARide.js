import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import requests from '../../../models/requestingRide';
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
      destination: {
        from: 'ikeja',
        to: 'Eko-Hotels, Victoria Island',
      },
      time: '7:30am',
    },
    price: 1500,
  },
  params: {
    rideId: 1
  }
}

const badRequest = {
  body: {
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
  },
  params: {
    rideId: 10
  }
}


const req = mockReq(request);
const res = mockRes();

describe('request a specific ride', () => {
  beforeEach(() => {
    RidesController.requestARide(req, res);
  });

  it('should return 201 on being requested', () => {
    res.status.should.have.been.calledWith(201);
  });

  it('should create a new request of a specified id', () => {
    const requested = requests.filter(request => request.rideId === 1);
    requested.length.should.be.above(-1);
  });
});
