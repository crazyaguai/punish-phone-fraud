'use strict'

const cluster = require('cluster')

const master = require('./master')
const worker = require('./worker')
