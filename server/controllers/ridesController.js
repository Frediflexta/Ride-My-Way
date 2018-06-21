import rides from '../models/rideOffers';

class RidesController {
  // Get rides on offer
  static getAllRides(req, res) {
    return res.status(200).send({
      message: 'Rides where retrieved successfully',
      rides,
    });
  }

  static getARide(req, res) {
    const rideId = Number(req.params.rideId);
    rides.find((ride, id) => {
      if (rideId === (id + 1)) {
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
