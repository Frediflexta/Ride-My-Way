import express from 'express';
import UserController from '../controllers/DB_Controller/users';
import RidesController from '../controllers/ridesController';
import OfferingRidesController from '../controllers/offerRidesController';
import RideControllers from '../controllers/DB_Controller/rides';

const router = express.Router();

// rider route
// router.get('/api/v1/rides', RidesController.getAllRides);
router.get('/api/v1/rides/:rideId', RidesController.getARide);
router.post('/api/v1/rides/:rideId/requests', RidesController.requestARide);

// driver route
router.post('/api/v1/rides', OfferingRidesController.createRide);
// router.get('api/v1/rides/:rideId/requests', OfferingRidesController.viewRequests)
router.put('/api/v1/rides/:rideId/requests/:requestsId/accept', OfferingRidesController.acceptRide);
router.put('/api/v1/rides/:rideId/requests/:requestId/reject', OfferingRidesController.rejectRide);


/* DB Routes */

// users route
router.post('/api/v1/auth/signup', UserController.userSignup);
router.post('/api/v1/auth/login', UserController.userSignIn);

// rides route
router.post('/api/v1/users/rides', RideControllers.postRides);
router.get('/api/v1/rides', RideControllers.getRides);

export default router;
