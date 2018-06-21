import rides from '../models/rideOffers';

class RidesController {
  // Get rides on offer
  static getAllRides(req, res) {
    return res.status(200).send({
      message: 'Rides where retrieved successfully',
      rides,
    });
  }
}

export default RidesController;
