import pool from '../../../config/config';
import Rides from '../../quries/Rides.json';

class RideControllers {
  static async postRides(req, res) {
    try {
      const {
        pickup,
        dropoff,
        date,
        car,
      } = req.body;

      if (!pickup || !dropoff || !date || !car) {
        return res.status(400).json({
          success: false,
          message: 'Ensure all fields are filled'
        });
      }

      const resp = await pool.query(Rides.postRide, [pickup, dropoff, date, car]);
      return res.status(201).json({
        success: true,
        message: 'Ride has been created',
        resp: {
          pickup,
          dropoff,
          date,
          car,
        },
      });
    } catch (err) {
      if (err) {
        return res.status(500).json({
          status: false,
          message: 'Internal server error',
          error: err,
        });
      }
    }
  }
}

export default RideControllers;
