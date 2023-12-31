// * Packages Import * //
const express = require("express");

// * Handler Import * //
const getAllBlogs = require("../controllers/blogControllers/getAllBlogs");
const addBlog = require("../controllers/blogControllers/addBlog");
const getIndividualBlog = require("../controllers/blogControllers/getIndividualBlog");
const updateIndividualBlog = require("../controllers/blogControllers/updateIndividualBlog");
const deleteIndividualBlog = require("../controllers/blogControllers/deleteIndividualBlog");

// * Middleware Import * //
const authenticationHandler = require("../middlewares/authenticationHandler");
const authorizationHandler = require("../middlewares/authorizationHandler");

const route = express.Router();

route
  .route("/")
  .get(getAllBlogs)
  .post(
    authenticationHandler,
    authorizationHandler(["ADMIN", "EDITOR"]),
    addBlog
  );

route
  .route("/:id")
  .get(getIndividualBlog)
  .patch(
    authenticationHandler,
    authorizationHandler(["ADMIN", "EDITOR"]),
    updateIndividualBlog
  )
  .delete(
    authenticationHandler,
    authorizationHandler(["ADMIN", "EDITOR"]),
    deleteIndividualBlog
  );

module.exports = route;
