#!/bin/bash

scssPath='assets/sass/screen.scss'
cssPath='assets/css/screen.min.css'

sass $scssPath:$cssPath \
  --style=compressed \
  --no-source-map \
  --silence-deprecation abs-percent,color-functions,global-builtin,import,mixed-decls

postcss $cssPath \
  -u autoprefixer postcss-combine-media-query \
  --no-map \
  --replace
