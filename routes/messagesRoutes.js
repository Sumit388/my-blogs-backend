// * Packages Import * //
const express = require("express");

// * Handler Import * //
const sendMessage = require("../controllers/messageControllers/sendMessage");
const getAllMessages = require("../controllers/messageControllers/getAllMessages");
const deleteMessage = require("../controllers/messageControllers/deleteMessage");

// * Middleware Import * //
const authenticationHandler = require("../middlewares/authenticationHandler");
const authorizationHandler = require("../middlewares/authorizationHandler");

const route = express.Router();

route
  .route("/")
  .get(authenticationHandler, authorizationHandler(["ADMIN"]), getAllMessages)
  .post(sendMessage);

route
  .route("/:id")
  .delete(
    authenticationHandler,
    authorizationHandler(["ADMIN"]),
    deleteMessage
  );

module.exports = route;
