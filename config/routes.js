module.exports = {

  // index is the main entrypoint of the application, it will serve the landing
  // page.
  index: (res, req)=> {
    res.send('Hello World')
  }

  // healtzh is just a basic endpoint that tells us that the application is
  // responsive.
  healtzh: (res, req)=> {
    res.sendStatus(200)
  }
}
