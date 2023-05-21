#!/bin/bash

scssPath='assets/sass/screen.scss'
cssPath='assets/css/screen.min.css'

sass $scssPath:$cssPath \
  --style=compressed \
  --no-source-map

postcss $cssPath \
  -u autoprefixer postcss-combine-media-query \
  --no-map \
  --replace
