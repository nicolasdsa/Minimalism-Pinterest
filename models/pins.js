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

  async getPin(id){
    const getPin = await this.collection.findOne({_id: id})
    return getPin
  }

  async listMe(id){
    const listMe = await this.collection.find({userId: id});
    return listMe
  }

  async comment(IdPin, IdComment){
    const createComment = await this.collection.findOneAndUpdate({_id: IdPin}, {$push: {comments: IdComment}}).exec();
    return createComment
  }

  async like(idUser, IdPin){
    const createComment = await this.collection.findOneAndUpdate({_id: IdPin}, {$push: {Likes: idUser}}).exec();
    return createComment
  }

  async teste(idUser, IdPin){
    const verify = await this.collection.findOne({Likes: {$in: [idUser]}});
    console.log(verify.likes);
    return verify
  }
}

module.exports = new pinsModel();