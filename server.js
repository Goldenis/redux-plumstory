import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import App from './src/App'
import { renderToString } from 'react-dom/server'
import qs from 'qs' // Add this at the top of the file
import proxy from 'proxy-middleware'
import url from 'url'
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.prod.config');
var packagejson = require('./package.json');
import { Router, Route, browserHistory, match, RouterContext } from 'react-router'
import routes from './src/routes'
import configureStore from './src/store/configureStore';

const app = Express();

// This is fired every time the server side receives a request
app.use('/static', proxy(url.parse(`http://localhost:${process.env.PORT}/static`)));
app.use('/assets', Express.static(path.join(__dirname, 'assets')));
app.use(handleRender);

function handleRender(req, res) {
    // Compile an initial state
    let preloadedState = {  }

    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    // Render the component to a string
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.

            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )
            const finalState = store.getState()

            res.status(200).send(renderFullPage(html, finalState))
        } else {
            res.status(404).send('Not found')
        }
    })
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/css/app.css">
      </head>
      <body class="sb-top" id="root">
        ${html}
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900,300">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/assets/css/animate.min.css">
      </body>
    </html>
    `
}

app.listen(process.env.PORT);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false
}).listen(process.env.PORT, 'localhost', function (err, result) {
    if (err) return console.log(err);

    console.log(`Listening at http://localhost:${process.env.PORT}/`);
});