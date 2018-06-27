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

    // find ride with params id
    const rideFound = rides.find(ride => ride.id === rideId);
    if (rideFound) {
      return res.status(200).send({
        message: `Ride id ${rideId} was found`,
        rideFound,
      });
    }
    return res.status(404).send({
      message: `Ride id ${rideId} does not exist`,
    });
  }

  static requestARide(req, res) {
    const rideId = Number(req.params.rideId);

    const requestedRide = rides.find(ride => ride.id === rideId);

    if (requestedRide) {
      return res.status(201).send({
        message: `Ride request has been Sent to ${requestedRide.driver.name}`,
        requestedRide,
      });
    }
    return res.status(400).send({
      message: 'Sorry something must have gone wrong',
    });
  }
}

export default RidesController;
