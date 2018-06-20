import rides from '../models/rideOffers';

class RidesController {
  // Get all rides on offer
  static getAllRides(req, res) {
    return res.status(200).send({
      message: 'Rides where retrieved successfully',
      success: true,
      rides,
    });
  }
}

export default RidesController;
