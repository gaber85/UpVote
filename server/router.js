const router = require('koa-router')();
const controller = require('./controller');

router.get('/topics', controller.getAll);
router.post('/topics', controller.createNew);
router.delete('/topics/:id', controller.deleteTopic);
router.put('/topics/:id/:direction', controller.vote);

module.exports = router;