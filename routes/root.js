"use strict";
const {
  findAllUsers,
  findAllComment,
} = require("../functionalComponents/user/userResponse/user");
const { user } = require("../swaggerSchema/schema");

module.exports = async function (fastify, opts) {
  fastify.get("/users", { schema: user.schema, handler: findAllUsers });
  fastify.get("/comments", { schema: user.schema, handler: findAllComment });
};
