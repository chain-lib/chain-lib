#!/bin/bash
set -e
set -u
set -x
readonly NPM_COMMAND=${1:-publish}
readonly TAG=${2:-latest}
readonly VERSION=${3:-"0.0.0"}
readonly BAZEL=./node_modules/.bin/bazel
readonly PKG_NPM_LABELS=`$BAZEL query --output=label 'kind("pkg_npm", //...)'`
$BAZEL build $PKG_NPM_LABELS
for pkg in $PKG_NPM_LABELS ; do
  $BAZEL run -- ${pkg}.${NPM_COMMAND} --access public --tag ${TAG}
done
