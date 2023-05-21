#!/bin/bash

ZIP_NAME='tao-blog-theme.zip'

rm -f $ZIP_NAME
zip -r $ZIP_NAME . \
  -x '.*' \
  -x 'node_modules/*' \
  -x 'yarn.lock' \
  -x 'shell/*' \
  -x 'assets/sass/*'
