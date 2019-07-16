const { Router } = require('express');
const router = Router();

const getUsersController = require('./controllers/get-users.js');
const getUserController = require('./controllers/get-user.js');
const createUserController = require('./controllers/create-user.js');
const deleteUserController = require('./controllers/delete-user.js');
const updateUserController = require('./controllers/update-user.js');

router
  .route('/')
  .get(getUsersController)
  .post(createUserController);

router
  .route('/:login')
  .get(getUserController)
  .delete(deleteUserController)
  .put(updateUserController);

router
  .get('*', (req, res) => res.status(404).send('Страница не найдена'));

module.exports = router;