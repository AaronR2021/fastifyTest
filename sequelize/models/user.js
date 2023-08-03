const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  // Sync models with the database
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("sync called user");
      console.log("Models synchronized with the database.>>>>>");
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return User;
};
