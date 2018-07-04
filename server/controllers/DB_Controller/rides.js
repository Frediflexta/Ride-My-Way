import pool from '../../../config/config';
import Rides from '../../quries/Rides.json';

class RideControllers {
  static async postRides(req, res) {
    try {
      const { id: userId } = req.decoded;
      const {
        pickup,
        dropoff,
        date,
        car,
      } = req.body;

      if (!pickup || !dropoff || !date || !car) {
        return res.status(400).json({
          success: false,
          message: 'Ensure all fields are filled',
        });
      }

      const resp = await pool.query(Rides.postRide, [userId, pickup, dropoff, date, car]);
      return res.status(201).json({
        success: true,
        message: 'Ride has been created',
        res: resp.rows[0],
      });
    } catch (err) {
      if (err) {
        return res.status(500).json({
          status: false,
          message: 'Internal server error',
          error: err.message,
        });
      }
    }
  }

  static async getRides(req, res) {
    try {
      const resp = await pool.query(Rides.getRides);
      return res.status(200).json({
        status: true,
        message: 'Retrived all rides',
        resp: resp.rows,
      });
    } catch (err) {
      throw err.message;
    }
  }

  static async getSingleRide(req, res) {
    try {
      const rideId = Number(req.params.rideId);
      const resp = await pool.query(Rides.getaRide, [rideId]);

      const foundRide = resp.rows.find(ride => ride.id === rideId);
      if (!foundRide) {
        return res.status(404).json({
          status: false,
          message: 'Ride does not exist',
        });
      }

      return res.status(200).json({
        status: true,
        message: 'Ride successfully retrieved',
        res: resp.rows[0],
      });
    } catch (err) {
      throw err.message;
    }
  }
}

export default RideControllers;
