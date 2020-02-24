const contact = require("../models").Contact;
module.exports = {
  home: function(req, res) {
    res.render("index");
  },
  services: function(req, res) {
    res.render("servicios");
  },
  contact: function(req, res) {
    res.render("contacto");
  },
  contactForm: function(req, res) {
    //contact.newForm;
    let data = {
      email: req.body.email,
      name: req.body.name,
      question: req.body.question
    };
    contact.create(data);
    res.redirect("/contacto");
  },
  show: function(req, res) {
    contact.findAll().then(result => res.json(result));
  }
};
