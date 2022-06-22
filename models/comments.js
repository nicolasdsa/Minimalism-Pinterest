const Model = require("../utils/model");
const mongoose = require('mongoose');

class commentsModel extends Model {
  constructor() {
    super("comments", {text: 'string', userId: mongoose.ObjectId, createdAt: Date, updatedAt: Date });
  }

  async create(comment, userId){
    const date = new Date();
    const create = await this.collection({text: comment.comment, userId, createdAt: date, updatedAt: date}).save();
    return create._id
  }

}

module.exports = new commentsModel();