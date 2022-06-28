const Joi = require("joi");
const PinsController = require("../../controllers/pins");
const ApiError = require("../../utils/apiError");

const schema = Joi.object({
  comment: Joi.string().required()
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const getPin = await PinsController.getPin(req.params.id);

  if(!getPin){
    throw ApiError.NotFound("Invalid Id pin", {});
  }


  const comment = await PinsController.comment(req.body, req.user.id, req.params.id);
  
  return res.status(200).send({
    success: true
  }); 
}


module.exports = route;