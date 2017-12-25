const ErrorHandler = require('../../services/errorHandler');

class Base {
  constructor(_model) {
    if (!_model) {
      ErrorHandler(new Error(), 'Failed to construct Base -> Model was not provided.');
    }
    this.Model = _model;
    this.registry = {};
    this.registries = [];
  }
  get(query) {
    return this.Model.find(query);
  }
  async getAll(query) {
    return this.Model.find(query);
  }
  async create(data) {
    const user = new this.Model(data);
    return user.save();
  }
  update() {
    this.Model.update();
    return this;
  }
  delete() {
    this.Model.delete();
    return this;
  }
}

module.exports = Base;
