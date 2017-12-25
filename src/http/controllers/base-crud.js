const ErrorHandler = require('../../services/errorHandler');

class Base {
  constructor(_model) {
    if (!_model) {
      ErrorHandler(new Error(), 'Failed to construct Base -> Model was not provided.');
    }
    this.model = _model;
    this.registry = {};
    this.registries = [];
  }
  get() {
    this.model.find();
    return this;
  }
  getAll() {
    this.model.findAll();
    return this;
  }
  create() {
    this.model.create();
    return this;
  }
  update() {
    this.model.update();
    return this;
  }
  delete() {
    this.model.delete();
    return this;
  }
}

module.exports = Base;
