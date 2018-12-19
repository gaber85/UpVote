const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codemocracy');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', () => console.log('Connected!')); // eslint-disable-line no-console

module.exports = db;