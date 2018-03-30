const router = require('express').Router();
const UserController = require('./controllers/UserController');

/*
 * {TODO} Handle errors
 */

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/users', async (req, res) => {
  res.send(await UserController.getAll());
});

router.put('/users', async (req, res) => {
  res.send(await UserController.update(req.body));
});

router.post('/users', async (req, res) => {
  res.send(await UserController.create(req.body));
});

router.get('/users/:id', async (req, res) => {
  res.send(await UserController.get(req.params.id));
});

router.delete('/users/:id', async (req, res) => {
  res.send(await UserController.delete(req.params.id));
});

module.exports = router;
