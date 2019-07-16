const User = require('../model/User.js');

module.exports = async (req, res) => {
  const { login } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ login });

  if (!user) {
    res.status(404).send(`Пользователя с логином "${login}" не существует`);
  }

  user.password = password;
  await user.save();
  res.status(200).send('Пароль успешно обновлён')
};
