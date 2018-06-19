import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome home, Ride-My_Way' });
});

export default router;
