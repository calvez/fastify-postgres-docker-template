'use strict'

const fp = require('fastify-plugin')
const pg = require('fastify-postgres')

module.exports = fp(async (fastify, opts) => {
  const postgresOpts = Object.assign({}, {
    user: process.env.POSTGRES_USER || 'calvez',
    host: process.env.POSTGRES_HOST || 'postgres',
    database: process.env.POSTGRES_DATABASE || 'fastifydb',
    password: process.env.POSTGRES_PASSWORD || '803f396106b91635d75af0f7b0bdb01e',
    port: process.env.POSTGRES_PORT || '5432'
  }, opts.pg)

  fastify.register(pg, postgresOpts)
})
