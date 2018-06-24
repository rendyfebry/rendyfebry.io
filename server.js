// server.js
const express = require('express')
const compression = require('compression')
const serveStatic = require('serve-static')
const morgan = require('morgan')
// const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

const logger = morgan('dev')

const app = express()

app.use(logger)
app.use(compression())
// app.use(history())

app.use(serveStatic(`${__dirname}/dist`))

const port = process.env.PORT || 3000

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server started ${port}`)
})
