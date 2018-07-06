import express from 'express';
import AuthVerification from '../Middleware/verifyToken';
import UserController from '../controllers/users';
import RideControllers from '../controllers/rides';
import RequestsControllers from '../controllers/requests';

const router = express.Router();

// users route
router.post('/api/v1/auth/signup', UserController.userSignup);
router.post('/api/v1/auth/login', UserController.userSignIn);

// rides route
router.post('/api/v1/users/rides', AuthVerification, RideControllers.postRides);
router.get('/api/v1/rides', RideControllers.getRides);
router.get('/api/v1/rides/:rideId', AuthVerification, RideControllers.getSingleRide);

// requests route
router.post('/api/v1/rides/:rideId/requests', AuthVerification, RequestsControllers.requestRide);
router.get('/api/v1/users/rides/:rideId/requests', AuthVerification, RequestsControllers.getallRequests);
router.put('/api/v1/users/rides/:rideId/requests/:requestId', AuthVerification, RequestsControllers.putReq);

export default router;
