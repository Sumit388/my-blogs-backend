const authorizationHandler = (validRoles) => (req, res, next) => {
  const user = req.user;

  // If user is not authenticated
  if (!user) {
    res.status(401);
    throw new Error("You are not authorized to perform this task.");
  }

  // If user is admin
  if (user.user_role === "ADMIN") {
    return next();
  }

  // If user is editor and task can be performed by editor
  if (user.user_role === "EDITOR" && validRoles.includes("EDITOR")) {
    return next();
  }

  // If user is user and data belongs to the user
  if (user.user_role === "USER" && user.id === req.params.id) {
    return next();
  }

  // If none of the conditions match
  res.status(401);
  throw new Error("You are not authorized to perform this task.");
};

module.exports = authorizationHandler;
