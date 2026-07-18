'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var home = fs.readFileSync(path.join(__dirname, '..', 'views', 'home.ejs'), 'utf8');
assert.ok(/<a\s+class="button"\s+href="\/login">Sign in<\/a>/.test(home), 'home page must link the Sign in button to /login');
console.log('PASS: home page Sign in button links to /login');
