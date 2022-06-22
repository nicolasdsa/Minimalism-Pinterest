const Joi = require("joi");
const PinsController = require("../../controllers/pins");

const schema = Joi.object({
  imageUrl: Joi.string().required(),
  texts: Joi.object({
    title: Joi.string().default(''),
    description: Joi.string().default('')
  })
});

const route = async (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const create = await PinsController.create(req.body, req.user.id);

  return res.status(200).send({
    success: true
  }); 
}


module.exports = route;