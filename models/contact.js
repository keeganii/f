'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    email: DataTypes.TEXT,
    name: DataTypes.TEXT,
    question: DataTypes.TEXT
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};