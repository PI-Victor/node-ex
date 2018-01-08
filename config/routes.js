module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/healthz', (req, res) => {
    res.sendStatus(200)
  });
}
