"use strict";
const {
  findAllUsers,
  findAllComment,
} = require("../../functionalComponents/user/userResponse/user");
const { admin } = require("../../swaggerSchema/schema");
module.exports = async function (fastify, opts) {
  fastify.get("/users", { schema: admin.schema, handler: findAllUsers });
  fastify.get("/comments", { schema: admin.schema, handler: findAllComment });
};
