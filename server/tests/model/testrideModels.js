import chai from 'chai';
import rideOffers from '../../models/rideOffers';

chai.should();

describe('Ride offers mock-models', () => {
  it('should be an array', () => {
    rideOffers.should.be.an('array');
  })

  it('should contain ride and driver details', () => {
    const ridesEx_ = [{
      id: 1,
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
    }]
    rideOffers[0].should.deep.equal(ridesEx_[0]);
  })
})