import rides from '../models/rideOffers';

class OfferingRidesController {
  static createRide(req, res) {
    const {
      driver,
      description,
      price,
    } = req.body;

    if (!driver || !description || !price) {
      return res.status(400).send({
        message: 'Sorry! Something must be missing in your request',
      });
    }

    rides.push({
      id: rides[rides.length - 1].id + 1,
      driver,
      description,
      price,
    });

    const newRide = rides.find(ride => ride.driver.name === req.body.driver.name);

    return res.status(201).send(newRide);
  }
}

export default OfferingRidesController;
