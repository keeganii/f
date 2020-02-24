const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site");
router.get("/", siteController.home);
router.get("/servicios", siteController.services);
router
  .route("/contacto")
  .get(siteController.contact)
  .post(siteController.contactForm);
router.get("/show", siteController.show);

module.exports = router;
