// We can customize the error message through this function or controller

export const errorHandler = (statusCode, message) => {
  const error = new Error ();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
