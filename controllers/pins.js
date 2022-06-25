const PinsModel = require("../models/pins.js");
const usersController = require('./users');
const commentsController= require('./comments');
const ApiError = require("../utils/apiError");

class pinsController {
  async create(body, userId) {
    const create = await PinsModel.create(body, userId);
    const update = await usersController.updateUser(userId);    
    return create;
  }

  async list(){
    const list = await PinsModel.list();
    return list;
  }

  async listMe(id){
    const listMe = await PinsModel.listMe(id);
    return listMe
  }

  async getPin(id){
    const getPin = await PinsModel.getPin(id);
    return getPin
  }

  async like(idUser, idPin){
    const verify = await PinsModel.verify(idUser, idPin);
    
    if(verify){
      throw ApiError.badRequest("This comment is already liked", {});
    }
    const like = await PinsModel.like(idUser, idPin);
    const updateUser = await usersController.updateUser(idUser);  
    const updatePin = await PinsModel.updatePin(idPin);  

    return like
  }

  async deslike(idUser, idPin){
    const verify = await PinsModel.verify(idUser, idPin);
    
    if(!verify){
      throw ApiError.badRequest("This comment is not liked", {});
    }

    const deslike = await PinsModel.deslike(idUser, idPin);

    const updateUser = await usersController.updateUser(idUser);  
    const updatePin = await PinsModel.updatePin(idPin);  

    return deslike
  }

  async comment(comment, id, idPin){
    const createComment = await commentsController.create(comment, id);
    const updateUser = await usersController.updateUser(id); 
    const updatePin = await PinsModel.updatePin(idPin);  
    const commentPin = await PinsModel.comment(idPin, createComment);
    return commentPin
  }

}


module.exports = new pinsController();