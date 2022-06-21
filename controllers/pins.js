const PinsModel = require("../models/pins.js");
const usersController = require('./users');

class pinsController {
  async create(body, userId) {
    const create = await PinsModel.create(body, userId);
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

  async comment(comment, id, idPin){
    const commentPin = await PinsModel.comment(comment);
    const update = await usersController.updateUser(id);    
    return commentPin
  }
}


module.exports = new pinsController();