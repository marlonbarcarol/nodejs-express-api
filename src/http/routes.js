const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/api', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
