"use strict";
const { findAllUsers, findAllComment} = require('../../functionalComponents/user/userResponse/user')

module.exports = async function (fastify, opts) {
  fastify
  .get("/",findAllUsers)
  .get('/comments',findAllComment)
};

