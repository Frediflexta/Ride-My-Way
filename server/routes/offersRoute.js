import express from 'express';
import RidesController from '../controllers/ridesController';
import OfferingRidesController from '../controllers/offerRidesController';

const router = express.Router();

// rider route
router.get('/api/v1/rides', RidesController.getAllRides);
router.get('/api/v1/rides/:rideId', RidesController.getARide);
router.post('/api/v1/rides/:rideId/requests', RidesController.requestARide);

// driver route
router.post('/api/v1/rides', OfferingRidesController.createRide);
router.post('/api/v1/requestMade/:rideId/accept', OfferingRidesController.acceptRide);

export default router;
