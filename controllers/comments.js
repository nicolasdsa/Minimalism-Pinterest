const commentsModel = require('../models/comments');

class CommentsController {
   async create(comment, user) {
    const create = await commentsModel.create(comment, user);
    return create;
  }

}

module.exports = new CommentsController();