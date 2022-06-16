const Model = require("../utils/model");
const mongoose = require('mongoose');

class pinsModel extends Model {
  constructor() {
    super("pins", {imageUrl: 'string',  texts: {title: 'string', description: 'string'}, userId: mongoose.ObjectId, comments: [], likes: [], createdAt: Date, updatedAt: Date });
  }

  async create(body, userId){
    const date = new Date();
    const create = await this.collection({...body, userId, comments: [], likes: [], createdAt: date, updatedAt: date}).save();
    return create
  }

  async list(){
    const list = await this.collection.find({});
    return list;
  }
  
  async listMe(id){
    const listMe = await this.collection.find({userId: id});
    return listMe
  }

}

module.exports = new pinsModel();