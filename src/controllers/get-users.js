const User = require('../model/User.js');

module.exports = async (req, res) => {
  res.send(await User.find());
};
