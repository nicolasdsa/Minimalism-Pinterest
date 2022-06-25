const Model = require("../utils/model");
const mongoose = require('mongoose');

class pinsModel extends Model {
  constructor() {
    super("pins", {imageUrl: 'string',  texts: {title: 'string', description: 'string'}, userId: mongoose.ObjectId, comments: [mongoose.ObjectId], likes: [mongoose.ObjectId], createdAt: Date, updatedAt: Date });
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
    const likeComment = await this.collection.findOneAndUpdate({_id: IdPin}, {$push: {likes: idUser}}).exec();
    console.log(likeComment);
    return likeComment
  }

  async deslike(idUser, idPin){
    const likeComment = await this.collection.findOneAndUpdate({_id: idPin}, {$pull: {likes: idUser}}).exec();
    console.log(likeComment);
    return likeComment
  }

  async verify(idUser, IdPin){
    const verify = await this.collection.findOne({$and: [{_id: IdPin}, {likes: idUser}]});
    return verify
  }

  async updatePin(id){
    const date = new Date();
    const updatePin = await this.collection.findOneAndUpdate({_id: id}, {updatedAt: date});
    return updatePin
   }
}

module.exports = new pinsModel();