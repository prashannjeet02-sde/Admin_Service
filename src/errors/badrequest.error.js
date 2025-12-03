const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(description, details = {}) {
    super("Bad Request", StatusCodes.BAD_REQUEST, `${description}`, details);
  }
}

module.exports = BadRequest;
