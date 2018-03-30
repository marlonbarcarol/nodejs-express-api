const ErrorHandler = require('../../services/errorHandler');

class BaseController {
  constructor(model) {
    if (!model) {
      ErrorHandler(new Error(), 'Failed to construct Base -> Model was not provided.');
    }

    this.Model = model;
  }

  /**
   * @param {string} id
   * @returns {Object}
   */
  get(id) {
    return this.Model.findOne({ _id: id })
      .catch((error) => {
        ErrorHandler(error);
        throw (error);
      });
  }

  getAll(query) {
    return this.Model.find(query)
      .catch((error) => {
        ErrorHandler(error);
        throw (error);
      });
  }

  /**
   * @param {Object} data
   * @returns {?Object}
   */
  create(data) {
    const modelInstance = new this.Model(data);
    return modelInstance.save()
      .catch((error) => {
        ErrorHandler(error);
        throw (error);
      });
  }

  update(data) {
    return this.Model.findOneAndUpdate({ _id: data._id }, data, { new: true })
      .catch((error) => {
        ErrorHandler(error);
        throw (error);
      });
  }

  delete(id) {
    return this.Model.findByIdAndRemove({ _id: id })
      .catch((error) => {
        ErrorHandler(error);
        throw (error);
      });
  }
}

module.exports = BaseController;
