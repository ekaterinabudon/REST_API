const User = require('../model/User.js');

module.exports = async (req, res) => {
  const { login } = req.params;

  if (login === 'prof@univer.msk.ru') {
    res.status(500).send('Невозможно удалить пользователя "prof@univer.msk.ru"');
  }

  const user = await User.findOne({ login });

  if (user) {
    await User.deleteOne({ login });
    res.status(200).send(`Пользоватеь "${login}" удален`);
  } else {
    res.status(404).send(`Пользователя с логином "${login}" не существует`);
  }
};
