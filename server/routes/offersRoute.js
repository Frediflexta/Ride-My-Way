import express from 'express';
import RidesController from '../controllers/rides';

const router = express.Router();

router.get('/api/v1/rides', RidesController.getAllRides);
router.get('/api/v1/rides/:rideId', RidesController.getRide);

export default router;
