const Joi = require("joi");

const schema = Joi.object({
  imageUrl: Joi.string().required(),
  texts: Joi.object({
    title: Joi.string().default('title'),
    description: Joi.string().default('description')
  })
});

const route = async(req, res) => {

}


module.exports = route;