import rides from '../models/rideOffers';

class RidesController {
  // Get rides on offer
  static getAllRides(req, res) {
    return res.status(200).send({
      message: 'Rides where retrieved successfully',
      rides,
    });
  }

  static getRide(req, res) {
    const { rideId } = req.params;
    rides.map((ride) => {
      if (ride.id === rideId) {
        return res.status(200).send({
          message: `Ride id ${rideId} was found`,
          ride,
        });
      }
      return res.status(404).send({
        message: `Ride id ${rideId} does not exist`,
      });
    });
  }
}

export default RidesController;
