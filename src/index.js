'use strict'

require('./index.html')
var Elm = require('./Main.elm')

Elm.embed(Elm.Main, document.getElementById('main'))
