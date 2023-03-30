const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode),
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

const successHandler = (success, req, res, next) => {
  const statusCode = res.statusCode === 201 ? 500 : res.statusCode;
  res.status(statusCode),
    res.json({
      message: success.message,
      stack: process.env.NODE_ENV === "production" ? null : success.stack,
    });
};
module.exports = { notFound, errorHandler, successHandler };
