const jwt = require("jsonwebtoken");
const config = require(".");

const genAuthToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  return token;
};

module.exports = genAuthToken;
