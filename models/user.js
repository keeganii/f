"use strict";
const bcrypt = require("bcrypt-nodejs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.TEXT,
      password: DataTypes.TEXT
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  User.prototype.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  User.prototype.compare = function(pass) {
    return bcrypt.compareSync(password, pass);
  };
  return User;
};
