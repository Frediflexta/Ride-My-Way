import express from 'express';
import RidesController from '../controllers/rides';

const router = express.Router();

router.get('/api/v1/rides', RidesController.listRides);

export default router;
