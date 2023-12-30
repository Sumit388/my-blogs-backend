const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let title = "";
  switch (statusCode) {
    case 400:
      title = "Validation Error";
      break;
    case 401:
      title = "Unathorized";
      break;
    case 403:
      title = "Forbidden";
      break;
    case 404:
      title = "Not Found";
      break;
    case 500:
      title = "Server Error";
      break;
    default:
      console.log("No error");
  }
  res.json({
    title: title,
    message: err.message,
    stackTrace: err.stack,
    statusCode: statusCode,
  });

  next();
};

module.exports = errorHandler;
