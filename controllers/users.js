const UsersModel = require("../models/users.js");

class UsersController {
   async create(user) {
    const id = await UsersModel.create(user);
    return id;
  }

   async getUser(email) {
    const user = await UsersModel.getUser(email);
    return user;
  }

   async updateUser(id){
    const updateUser = await UsersModel.updateUser(id);
    return updateUser
   }

}

module.exports = new UsersController();