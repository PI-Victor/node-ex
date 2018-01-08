# node-ex
A NodeJS sample app

First you need to install [yarn](https://yarnpkg.com/en/docs/install).


Install all dependencies for "production".
```
yarn install
```

Run the application, `port` and `host` bindings can be configured via the [.env file](.env).
```
$ yarn run v1.3.2
$ NODE_PATH=./config:./controllers:./models:./assets node server.js
Application accessible on http://127.0.0.1:3030
```

##### Development

Installing the `dev` dependencies:
```
yarn install --dev
```

Run the dev server with hot-reload using [supervisor](https://www.npmjs.com/package/supervisor).

```
$ yarn devserve
yarn run v1.3.2
$ NODE_PATH=./config:./controllers:./models:./assets ./node_modules/supervisor/lib/cli-wrapper.js -e 'html|js' app server.js

Running node-supervisor with
  program 'server.js'
  --watch '.'
  --extensions 'html|js'
  --exec 'node'

Starting child process with 'node server.js'
Watching directory '/$HOME/$USER/cpm-engineering/node-ex' for changes.
Press rs for restarting the process.
Application accessible on http://127.0.0.1:3030
```
