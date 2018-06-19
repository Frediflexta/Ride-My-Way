import chai from 'chai';
import requestMade from '../../models/rideRequests';

chai.should();

describe('Request made to a driver to join his/her ride on an offer', () => {
  it('should an array', () => {
    requestMade.should.be.an('array');
  })

  it('should contain details of the rider making the request and the ride requested', () => {
    const request_Ex = [{
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
    ];
    requestMade[0].should.be.deep.equal(request_Ex[0]);
  })
})