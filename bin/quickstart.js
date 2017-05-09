#!/usr/bin/env node
var ncp = require('ncp').ncp;
var path = require('path');

var contentPath = path.resolve(__dirname, '../content/');

ncp.limit = 16;

ncp(contentPath, process.cwd(), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});