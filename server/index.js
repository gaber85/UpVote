const Koa = require('koa');
const app = new Koa();
const PORT = 3000;
const db = require('./model');

const bodyParser = require('koa-bodyparser');
const router = require('./router.js');

app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => console.log( // eslint-disable-line no-console
  `Server running on port: ${PORT}`));
