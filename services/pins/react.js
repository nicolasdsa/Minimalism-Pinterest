const Joi = require("joi");
const { get } = require("mongoose");
const PinsController = require("../../controllers/pins");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  react: Joi.string().valid('like', 'deslike').required()
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  const {react} = req.body;

  if (error) {
    return res.status(400).send(error);
  }

  const getPin = await PinsController.getPin(req.params.id);
  if(!getPin){
    throw ApiError.badRequest("Invalid Id pin", {});
  }


  if(react == 'like'){
    const like = await PinsController.like(req.user.id, req.params.id);
  }

  if(react == 'deslike'){
    const deslike = await PinsController.deslike(req.user.id, req.params.id);
  }
  
  return res.status(200).send({
    success: true
  }); 
}


module.exports = route;