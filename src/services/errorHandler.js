/**
 * {TODO} Error generator can be improved.
 */
const ErrorHandler = (error, message) => {
  console.error(error, message);

  Promise.reject(error);
};

// eslint-disable-next-line arrow-body-style
ErrorHandler.apiFriendly = (status, error, message = error.message) => {
  return {
    friendly: true,
    error,
    message,
    status,
  };
};

module.exports = ErrorHandler;
