import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import RidesController from '../../../controllers/ridesController';

chai.use(sinonChai);
chai.should();

const request = {
  body: {

  }
}

const req = mockReq(request);
const res = mockRes();

describe('get all rides method', () => {
  beforeEach(() => {
    RidesController.getAllRides(req, res);
  });

  it('should return 200 on success', () => {
    res.status.should.have.been.calledWith(200);
  });
});