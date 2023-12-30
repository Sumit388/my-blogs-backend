// * Packages Import * //
const express = require("express");

// * Handler Import * //
const userLogin = require("../controllers/userControllers/userLogin");
const userSignup = require("../controllers/userControllers/userSignup");
const getIndividualUserDetails = require("../controllers/userControllers/getIndividualUserDetails");
const getAllUserDetails = require("../controllers/userControllers/getAlluserDetails");
const updateIndividualUser = require("../controllers/userControllers/updateIndividualUser");
const deleteIndividualUser = require("../controllers/userControllers/deleteIndividualUser");

// * Middleware Import * //
const authenticationHandler = require("../middlewares/authenticationHandler");
const authorizationHandler = require("../middlewares/authorizationHandler");

const route = express.Router();

route
  .route("/")
  .get(
    authenticationHandler,
    authorizationHandler(["ADMIN"], false),
    getAllUserDetails
  );

route
  .route("/:id")
  .get(authenticationHandler, getIndividualUserDetails)
  .patch(
    authenticationHandler,
    authorizationHandler(["ADMIN", "USER"]),
    updateIndividualUser
  )
  .delete(
    authenticationHandler,
    authorizationHandler(["ADMIN", "USER"]),
    deleteIndividualUser
  );

route.route("/register").post(userSignup);

route.route("/login").post(userLogin);

module.exports = route;
