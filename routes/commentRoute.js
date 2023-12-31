// * Packages Import * //
const express = require("express");

// * Handler Import * //
const getAllComments = require("../controllers/commentControllers/getAllComments");
const addCommentToBlog = require("../controllers/commentControllers/addComment");
const deleteCommentFromBlog = require("../controllers/commentControllers/deleteComment");

// * Middleware Import * //
const authenticationHandler = require("../middlewares/authenticationHandler");
const authorizationHandler = require("../middlewares/authorizationHandler");

const route = express.Router();

route
  .route("/:blogId/")
  .get(getAllComments)
  .post(authenticationHandler, addCommentToBlog);

route
  .route(":blogId/:commentId/:id")
  .delete(
    authenticationHandler,
    authorizationHandler(["ADMIN", "EDITOR", "USER"]),
    deleteCommentFromBlog
  );

module.exports = route;
