const router = require('express').Router();
const UserController = require('./controllers/UserController');

/*
 * {TODO} Handle errors
 */

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/authenticate', async (req, res) => {
  try {
    const token = await UserController.authenticate(req.body.email, req.body.password);
    res.send(token);
  } catch (error) {
    if (error.friendly) {
      return res.status(error.status || 500).send(error);
    }

    res.status(500).send(`An error occurred: ${error}`);
  }
});

router.get('/users', async (req, res) => {
  res.send(await UserController.getAll());
});

router.put('/users', async (req, res) => {
  res.send(await UserController.update(req.body));
});

/**
 * {TODO} Handle when tried to add an existing user.
 */
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
