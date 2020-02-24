const user = require("../models").user;
module.exports = {
  showLogin: function(req, res) {
    res.render("usuarios");
  },
  auth: function(req, res) {}
};
