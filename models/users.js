const Model = require("../utils/model");
const mongoose = require('mongoose');

class UsersModel extends Model {
  constructor() {
    super("users", {name: 'string',  email: 'string', password: 'string' });
  }

  async create(user){
    const id = await this.collection(user).save();
    return id
  }

  async getUser(userEmail) {
    const usersData = await this.collection.findOne({email: userEmail}).exec();
    return usersData;
  }

}

module.exports = new UsersModel();