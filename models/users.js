const Model = require("../utils/model");
const { ObjectId } = require("mongoose");

class UsersModel extends Model {
  constructor() {
    super("users", {email: 'string', password: 'string', username: 'string', createdAt: Date, updatedAt: Date });
  }

  async create(user){
    const date = new Date();
    const id = await this.collection({...user, createdAt: date, updatedAt: date}).save();
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