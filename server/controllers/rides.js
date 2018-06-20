import rides from '../models/rideOffers';

class RidesController {
  static listRides(req, res) {
    return res.status(200).json({
      message: 'Rides was successfully retrieved',
      success: true,
      rides,
    });
  }
}

export default RidesController;
