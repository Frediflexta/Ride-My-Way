import pool from '../../../config/config';
import Requests from '../../quries/Requests.json';


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
        res: resp.rows,
        // res:  {
        //   accept,
        //   reject,
        //   rideId,
        //   userId,
        // },
      });

    } catch (err) {
      throw err.message;
    }
  }


}

export default RequestsControllers;