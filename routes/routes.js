const users = require('users');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('index', {
      pageTitle: 'CPM Engineering',
      pageName: 'Application demo',
      users: users
    });
  });

  app.get('/healthz', (req, res, next) => {
    res.sendStatus(200);
  });
}
