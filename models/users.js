const Model = require("../utils/model");
const { ObjectId } = require("mongoose");

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

  async updateUser(id) {
    const date = new Date();
    const updateUser = await this.collection.findOneAndUpdate({_id: id}, {updatedAt: date});
    return updateUser
  }

}

module.exports = new UsersModel();