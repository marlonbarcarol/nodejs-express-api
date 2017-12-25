const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../http/routes');
const { db } = require('./db');

db.initialize();

app.use(cors()); // Enable all cors requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(process.env.PORT || 80);

module.exports = app;
