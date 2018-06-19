import chai from 'chai';
import offers from '../../models/driverOffers';

chai.should();

describe('Driver offering rides mock-model', () => {
  it('should be an array', () => {
    offers.should.be.an('array');
  })

  it('should contain details of the ride', () => {
    const offer_Ex = [{
      id: 1,
      driver: {
        name: 'Jesse Kalu',
        car: 'toyota camery',
        plateNo: 'KTU5768IKJ',
      },
      rides: [
        {
          description: {
            destination: { from: 'ikeja', to: 'Eko-Hotels, Victoria Island' },
            time: '7:30am',
          },
          price: 1500,
        },
      ],
    },]
    offers[0].should.be.deep.equal(offer_Ex[0]);
  })
})