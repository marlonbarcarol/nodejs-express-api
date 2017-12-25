const ErrorHandler = (error, message) => {
  console.error(error, message);

  Promise.reject(error);
};

module.exports = ErrorHandler;
