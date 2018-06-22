import express from 'express';
import RidesController from '../controllers/ridesController';
import OfferingRidesController from '../controllers/offerRidesController';

const router = express.Router();

router.get('/api/v1/rides', RidesController.getAllRides);
router.get('/api/v1/rides/:rideId', RidesController.getARide);
router.post('/api/v1/rides/:rideId/requests', RidesController.requestARide);
router.post('/api/v1/rides', OfferingRidesController.createRide);

export default router;
