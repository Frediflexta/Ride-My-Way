import rides from '../models/rideOffers';

class RidesController {
  static listRides(req, res) {
    return res.status(200).send(rides);
  }
}

export default RidesController;
