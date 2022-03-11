const express = require('express')
const routerRepos = require('./routes/repos')

const app = express()

app.use(express.json())

app.use('/repos', routerRepos)

module.exports = app