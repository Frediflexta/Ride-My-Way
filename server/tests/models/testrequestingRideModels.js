import chai from 'chai';
import request from '../../models/requestingRide';

chai.should();

describe('Ride requested', () => {
  it('should be an array', () => {
    request.should.be.an('array');
  })

  it('should contain details of the ride requested', () => {
    const request_Ex = [{
      requestedRide: {
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
      }
    }]
    request[0].should.be.deep.equal(request_Ex[0]);
  })
})