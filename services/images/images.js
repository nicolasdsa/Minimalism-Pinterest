const imagesController = require ('../../controllers/images');

const route = async(req, res) => {
  const upload = await imagesController.upload(req.files);
  
  res.status(200).send({imageUrl: upload})
}


module.exports = route;