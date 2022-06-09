const imagesController = require ('../../controllers/images');

const route = async(req, res) => {
  const upload = await imagesController.upload(req.files);
  
}


module.exports = route;