const imagesController = require ('../../controllers/images');
const ApiError = require("../../utils/apiError");

const route = async(req, res) => {

  if(!req.files){
    throw ApiError.badRequest("No Image", {});
  }

  if(req.files.image.mimetype.split('/')[0] !== 'image'){
    throw ApiError.badRequest("Not a image", {});
  }


  const upload = await imagesController.upload(req.files);
  
  res.status(200).send({imageUrl: upload})
}


module.exports = route;