const User = require('../model/User.js');

module.exports = async (req, res) => {
  const { login } = req.params;
  const user = await User.findOne({ login });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send(`Пользователь с логином "${login}" не найден`);
  }
};
