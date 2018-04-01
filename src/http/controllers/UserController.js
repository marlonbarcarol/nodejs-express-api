const BaseController = require('./BaseController');
const User = require('../../model/User');
const errorHandler = require('../../services/errorHandler');
const Auth = require('../../services/Auth');

class UserController extends BaseController {
  constructor() {
    super(User);
  }

  async authenticate(email, password) {
    if (!email || !password) {
      throw (errorHandler.apiFriendly(400, new Error('Email or password not provided.')));
    }

    if (!process.env.JWT_SECRET) {
      throw (new Error('Please configure your JWT_SECRET in .env'));
    }

    const user = await User.findOne({ email, password })
      .catch((error) => {
        throw (errorHandler(error));
      });

    if (!user) {
      throw (errorHandler.apiFriendly(404, new Error('Incorrect email or password.')));
    }

    return {
      token: new Auth(user).generateToken(),
      ...user.toJSON(),
    };
  }
}

module.exports = new UserController();
