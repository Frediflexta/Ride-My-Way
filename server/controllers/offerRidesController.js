import rides from '../models/rideOffers';
import requests from '../models/rideRequests';

class OfferingRidesController {
  static createRide(req, res) {
    const {
      driver,
      description,
    } = req.body;

    if (!driver || !description) {
      return res.status(404).send({
        message: 'Sorry! Something must be missing in your request',
      });
    }

    rides.push({
      id: rides[rides.length - 1].id + 1,
      driver,
      description,
    });

    const newRide = rides.find(ride => ride.driver.name === req.body.driver.name);

    return res.status(201).send({
      newRide,
      state: 'New ride created',
    });
  }

  static acceptRide(req, res) {
    const rideId = Number(req.params.rideId);
    const acceptedRide = requests.find(accept => accept.id === rideId);

    if (acceptedRide) {
      requests.push({
        acceptedRide,
      });

      return res.status(202).send({
        message: `You have accepted ride with ${acceptedRide.rider.name}`,
        state: 'Ride accepted',
        acceptedRide,
      });
    }

    return res.status(400).send({
      message: `Request with id:${rideId} does not exist`,
    });
  }

  static rejectRide(req, res) {
    const reqId = Number(req.params.requestId);

    const rejectReq = requests.find(request => request.id === reqId);

    if (rejectReq) {
      return res.status(202).send({
        status: 'Rejected',
        rejectReq,
      });
    }

    return res.status(400).send({
      message: 'Request does not exist',
    });
  }
}

export default OfferingRidesController;
