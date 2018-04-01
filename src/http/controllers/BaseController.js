const errorHandler = require('../../services/errorHandler');

class BaseController {
  constructor(model) {
    if (!model) {
      errorHandler(new Error(), 'Failed to construct Base -> Model was not provided.');
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
        errorHandler(error);
        throw (error);
      });
  }

  getAll(query) {
    return this.Model.find(query)
      .catch((error) => {
        errorHandler(error);
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
        errorHandler(error);
        throw (error);
      });
  }

  update(data) {
    return this.Model.findOneAndUpdate({ _id: data.id }, data, { new: true })
      .catch((error) => {
        errorHandler(error);
        throw (error);
      });
  }

  delete(id) {
    return this.Model.findByIdAndRemove({ _id: id })
      .catch((error) => {
        errorHandler(error);
        throw (error);
      });
  }
}

module.exports = BaseController;
