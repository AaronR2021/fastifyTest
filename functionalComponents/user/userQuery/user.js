//!import dependencies
const { Sequelize } = require('sequelize')
const dbConnect = require('../../../sequelize/config/config')()
const sequelize = new Sequelize(dbConnect);
//!import models
const User = require("../../../sequelize/models/user")(sequelize);
const Comment = require("../../../sequelize/models/comment")(sequelize);

//!Database queries
async function findAllUsersQuery () {
    return await User.findAll()
}

async function findAllCommentQuery () {
    return await Comment.findAll()
}

module.exports = {
    findAllUsersQuery,
    findAllCommentQuery
};