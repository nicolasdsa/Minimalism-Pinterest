const bcrypt = require("bcryptjs");
const UsersController = require("./users");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");

const secret = "t3st4nd0";

class AuthController {
  static async signup({ email, password, username }) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const verify = await UsersController.getUser(email);


    if(verify){
      throw ApiError.badRequest("Email is already in use", {});
    }

    const id = await UsersController.create({
      email,
      password: hash,
      username,
    });
    return id;
  }

  static async signin({ email, password }) {
    const user = await UsersController.getUser(email);

    if (!user) {
      throw ApiError.badRequest("Invalid password", {});
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw ApiError.badRequest("Invalid password", {});
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secret);

    return token;
  }
}

module.exports = AuthController;
