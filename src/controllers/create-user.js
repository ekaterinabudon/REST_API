const User = require('../model/User.js');

module.exports = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });

  if (user) {
    res.status(403).send(`Пользователь с логином "${login}" уже существует`);
  }

  const newUser = new User({ login, password });
  await newUser.save();
  res.status(200).send('Зарегистрирован новый пользователь.')
};
