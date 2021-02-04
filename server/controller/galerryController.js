const {Galery} = require('../models');

class GaleryController {
    static async getAllPhotos(req, res) {
      try {
        const galeries = await Galery.findAll();
        const msg = {
            message: 'Success',
            data: galeries
        }
        res.status(200).json(msg);
      } catch(err) {
          res.status(500).json(err);
      }
    }
}
module.exports = GaleryController;