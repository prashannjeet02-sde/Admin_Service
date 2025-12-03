class BaseError {
  constructor(name, statusCode) {
    this.name = name;
    this.statusCode = statusCode;
  }
}

module.exports = BaseError;
