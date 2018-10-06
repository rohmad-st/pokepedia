# Pokepedia
Pokepedia (Pokemon Encyclopedia) is a website that provide showcase about Pokemon

[Demo](http://pokepedia.surge.sh)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
The following software is already running as well on my system using:

`Node 9.11.2` & `Yarn 1.10.1`

If you cannot install on your system, you have to remove `yarn.lock` first. And then repeat to typing `yarn` on your terminal.



## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build:prod
```

### Run your unit tests
```
yarn test
```

### Others setup
```
{
  "build": "webpack",
  "build:dev": "npm run build -- --env.env=dev",
  "build:dev:watch": "npm run build:dev -- --watch",
  "build:dev:bundleanalyze": "npm run build:dev -- --env.addons=bundleanalyze",
  "build:dev:bundlebuddy": "npm run build:dev -- --env.addons=bundlebuddy",
  "serve:dev": "webpack-dev-server --env.env=dev --hot",
  "serve:dev:dashboard": "webpack-dashboard -- webpack-dev-server --hot --env.env=dev --env.addons=dashboard",
  "build:prod": "npm run build -- -p --env.env=prod",
  "build:prod:watch": "npm run build:prod -- --watch",
  "build:prod:bundleanalyze": "npm run build:prod -- --env.addons=bundleanalyze",
  "build:prod:bundlebuddy": "npm run build:prod -- --env.addons=bundlebuddy",
  "serve:prod": "npm run build:prod && live-server ./public",
  "lint": "eslint .; exit 0",
  "lint:fix": "eslint . --fix; exit 0",
  "start": "npm run serve:dev",
  "test": "echo \"No tests available\"; exit 0",
  "webpack-defaults": "webpack-defaults"
}
```


👏 Special Thanks to All of Team [React](https://github.com/facebook/react) & Creator [React Redux Starter](https://github.com/drminnaar/react-redux-starter) that has been inspiring and make better and more efficiency development.
