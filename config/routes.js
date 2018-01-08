module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      pageName: 'A Sample application'
    })
  });

  app.get('/healthz', (req, res) => {
    res.sendStatus(200)
  });
}
