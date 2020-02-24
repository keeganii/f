const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const morgan = require("morgan");
const app = express();
const siteRoutes = require("./routes/site_routes.js");
app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use("/img", express.static("img"));
app.use("/css", express.static("css"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(siteRoutes);

app.listen(process.env.PORT || 3000);
