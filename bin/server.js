var Hapi = require('hapi')

var app = require('../index')

// Create a server with a host and port
var server = new Hapi.Server()
server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8000
})

server.register(app, function (error) {
  if (error) {
    throw error
  }

  server.start(function (error) {
    if (error) {
      throw error
    }
    console.log('Server running at:', server.info.uri)
  })
})
