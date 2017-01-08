module.exports = {
  register: hoodieDashboard
}

module.exports.register.attributes = {
  name: 'hoodie-dashboard'
}

var corsHeaders = require('hapi-cors-headers')

var pkg = require('./package.json')

var contributorsByMonth = [
  29,
  32,
  18,
  42,
  17,
  32,
  34,
  15,
  39,
  37,
  20,
  28
]

function hoodieDashboard (server, options, next) {
  server.ext('onPreResponse', corsHeaders)

  // root path
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply({
        ok: true,
        version: pkg.version
      })
    }
  })

  // contributors by month
  server.route({
    method: 'GET',
    path: '/contributors/by-month',
    handler: function (request, reply) {
      reply(contributorsByMonth)
    }
  })

  next()
}
