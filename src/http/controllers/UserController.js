const Base = require('./base-crud');
const User = require('../../model/User');

class UserController extends Base {
  constructor() {
    super(User);
    console.log(this);
  }
}

module.exports = new UserController();
