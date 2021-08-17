# pure-react: a simple react configuration from scratch, using react, webpack and babel.

This is a simple configuration project for a react, webpack and babel project.

## 1. Structure project
Creating the structure folders and files:
```sh
# folders
mkdir src public public/assets

# and config files
touch webpack.config.js src/.babelrc public/index.html
```

## 2. React
Install packages for React:
```sh
npm i react react-dom react-router-dom
```

## 3. Webpack bundler
Install packages for Webpack bundler (js/jsx, html and local server with hot-loader):
```sh
npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server
```

## 4. Babel transpiler
Basic installation for Babel transpiler.
> Note: `@babel/preset-env` will transpile es6+ automatically to es5. No configurantion requires. Read more [here](https://babeljs.io/docs/en/babel-preset-env).
```sh
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader file-loader html-loader
```

## 5. Eslint
Install Eslint packs:
```sh
# if Eslint is not installed globally
npm i -D eslint

# and init eslint with a Airbnb style or other
npx eslint --init
```

## 6. More
You can add more packages like [Styled Components](https://www.npmjs.com/package/styled-components) and [Redux](https://www.npmjs.com/package/redux).

Enjoy! 👋