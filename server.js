const express = require('express')
const server = express()
const recipes = require('./data/recipes/recipes-router.js')

server.use(express.json())
server.use('/api/recipes', recipes)

module.exports = server;  