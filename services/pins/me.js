const PinsController = require("../../controllers/pins");

const route = async(req, res) => {

  const listMe = await PinsController.listMe(req.user.id);

  return res.status(200).send({
    listMe
  }); 
}


module.exports = route;