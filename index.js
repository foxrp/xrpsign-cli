#!/usr/bin/env node
const sign = require('xrpsign');

const argv = require('yargs')
    .usage('Usage: $0 [tx_json] [secret]')
    .demandCommand(2)
    .argv;

const txJSON = argv._[0];
const secret = argv._[1];

console.log(JSON.stringify(sign(txJSON, secret)));

process.exit(0);
