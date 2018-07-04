import pool from '../../../config/config';
import Requests from '../../quries/Requests.json';


class RequestsControllers {
  static async requestRide(req, res) {
    try {
      const { id: userId } = req.decoded;
      const {
        rideId,
        fullname,
        accept,
        reject,
      } = req.body;
      
      const resp = await pool.query(Requests.postrequest, [userId, rideId, fullname, accept, reject]);
      return res.status(201).json({
        success: true,
        message: 'Request has been made',
        res: resp.rows[0],
      });

    } catch (err) {
      throw err.message;
    }
  }
}

export default RequestsControllers;