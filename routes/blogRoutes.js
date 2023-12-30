const express = require("express");

const route = express.Router();

route.route("/").get().post();

route.route("/:id").get().patch().delete();

module.exports = route;
