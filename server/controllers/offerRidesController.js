import rides from '../models/rideOffers';
import requestMade from '../models/rideRequests';

class OfferingRidesController {
  static createRide(req, res) {
    const {
      driver,
      description,
      price,
    } = req.body;

    if (!driver || !description || !price) {
      return res.status(404).send({
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

    return res.status(201).send({
      newRide,
      state: 'New ride created',
    });
  }

  static acceptRide(req, res) {
    const rideId = Number(req.params.rideId);
    const acceptedRide = requestMade.find(accept => accept.id === rideId);

    if (acceptedRide) {
      requestMade.push({
        acceptedRide,
      });

      return res.status(202).send({
        message: `You have accepted ride with id ${rideId}`,
        state: 'Ride accepted',
        acceptedRide,
      });
    }

    return res.status(400).send({
      message: `Request with id ${rideId} does not exist`,
      state: 'Bad request',
    });
  }
}

export default OfferingRidesController;
