const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../http/routes');
const { db } = require('./db');

/*
 * {TODO} Write tests
 */

db.initialize();

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);
app.all('*', (req, res) => {
  res.send('endpoint was not found', 404);
});

app.listen(process.env.PORT || 80);

module.exports = app;
