// * Packages Import * //
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authenticationHandler = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECERET_KEY, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not authorised");
      }
      req.user = decoded?.user;
      next();
    });
  }

  //If the token  was not provided.
  if (!token) {
    res.status(401);
    throw new Error("Token missing in the request");
  }
});

module.exports = authenticationHandler;
