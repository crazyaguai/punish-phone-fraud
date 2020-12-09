'use strict'

const cluster = require('cluster')

const config = require('../config')

const workerConfig = {}

const init = async () => {
  console.log('master init')
  for (let i = 0; i < config.workers; i++) {
    const worker = cluster.fork()
    workerConfig[i] = worker
  }
}

module.exports = {
  init,
}
