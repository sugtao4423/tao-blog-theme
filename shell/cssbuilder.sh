#!/bin/bash

watchScssPath='assets/sass/screen.scss'
tempCompiledCssPath='assets/css/built.min.css'
compiledCssPath='assets/css/screen.min.css'

watch="$1"

function cleanup {
  rm -f $tempCompiledCssPath
  echo "Removed $tempCompiledCssPath"
}
trap cleanup EXIT

sass $watchScssPath:$tempCompiledCssPath \
  --style=compressed \
  --no-source-map $watch &

postcss $tempCompiledCssPath \
  -u autoprefixer postcss-combine-media-query \
  --no-map \
  -o $compiledCssPath $watch &

wait
