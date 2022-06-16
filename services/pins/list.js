const PinsController = require("../../controllers/pins");

const route = async(req, res) => {

  const list = await PinsController.list();

  return res.status(200).send({
    list
  }); 
}


module.exports = route;