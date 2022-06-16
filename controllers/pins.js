const PinsModel = require("../models/pins.js");

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
}


module.exports = new pinsController();