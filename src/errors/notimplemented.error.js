const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(propertyName, details = {}) {
    super(
      "Not-Implemented-Error",
      StatusCodes.NOT_IMPLEMENTED,
      `${propertyName} not implemented`,
      details
    );
  }
}

module.exports = NotImplemented;
