#!/bin/bash

jsLibDir='assets/js/lib'
minified='assets/js/main.min.js'

find assets/js/lib -name '*.js' -exec cat {} \; |
uglifyjs \
  --compress \
  --mangle \
  --output $minified
