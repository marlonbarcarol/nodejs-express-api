const BaseController = require('./BaseController');
const User = require('../../model/User');

class UserController extends BaseController {
  constructor() {
    super(User);
  }
}

module.exports = new UserController();
