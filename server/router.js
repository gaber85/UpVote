app.get('/topics', (req, res) => res.send('get topics'))
  .post('/topics', (req, res) => res.send('create new'))
  .delete('/topics/:id', (req, res) => res.send(`delete topic ${req.params.id}`))
  .put('/topics/:id/up', (req, res) => res.send(`vote topic up ${req.params.id}`));
