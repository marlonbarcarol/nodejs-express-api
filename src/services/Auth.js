const jwt = require('jsonwebtoken');

class Auth {
  /**
   * @param {Object} user - The User model.
   */
  constructor(user) {
    this.user = user;
  }

  /**
   * Generates a token for a specific user.
   */
  generateToken() {
    return jwt.sign(
      {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        grant: this.user.grant,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
  }
}

/**
 * Verifies if a token is valid.
 * @param {String} token
 */
Auth.verifyToken = (token) => {
  jwt.verify(token, process.env.JWT_SECRET);
};

// refreshOptions.verify = options you would use with verify function
Auth.refreshToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  delete payload.iat;
  delete payload.exp;
  // The first signing converted all needed options into claims, they are already in the payload
  return new Auth(payload).generateToken();
};

module.exports = Auth;
