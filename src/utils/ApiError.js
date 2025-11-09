class ApiError extends Error {
  constructor(
    message = "something went wrong",
    statusCode = 500,
    error = [],
    stack = ""
  ) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.error = error;
    if (stack) {
      this.stack = stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

export {ApiError}