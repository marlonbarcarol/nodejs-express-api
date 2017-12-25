const router = require('express').Router();
const UserController = require('./controllers/UserController');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/api', (req, res) => {
  res.send('Hello World');
});

router.get('/users', async (req, res) => {
  res.send(await UserController.getAll());
});

router.get('/users/:id', (req, res) => {
  res.send('get with id');
});

router.post('/users', async (req, res) => {
  console.log(req.body);
  const user = await UserController.create(req.body);
  res.send(user);
});

module.exports = router;
