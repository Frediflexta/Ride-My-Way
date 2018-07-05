import pool from '../../config/config';
import Requests from '../quries/Requests.json';


class RequestsControllers {
  static async requestRide(req, res) {
    try {
      const { id: userId } = req.decoded;
      const rideId = Number(req.params.rideId);
      const {
        accept,
        reject,
      } = req.body;

      const resp = pool.query(Requests.postrequest, [accept, reject, rideId, userId]);

      if (!accept || !reject) {
        return res.statu(400).json({
          success: true,
          res: resp.rows,
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Request as been sent',
        res: {
          accept,
          reject,
          rideId,
          userId,
        },
      });
    } catch (err) {
      throw err.message;
    }
  }

  static async getallRequests(req, res) {
    try {
      const { rideId } = Number(req.params.rideId);

      const resp = await pool.query(Requests.getallrequests, [rideId]);

      const reqRide = resp.rows.filter(ride => ride.id === rideId);

      if (reqRide) {
        return res.status(200).json({
          success: true,
          message: 'Requests retrieved',
          reqRide,
        });
      }

      return res.status(404).json({
        success: true,
        message: 'Requests dont exist',
      });
    } catch (err) {
      throw err.message;
    }
  }
}

export default RequestsControllers;
