#!/bin/bash
set -e
set -u
set -x
readonly NPM_COMMAND=${1:-publish}
readonly TAG=${2:-latest}
readonly VERSION=${3:-"0.0.0"}
readonly BAZEL=./node_modules/.bin/bazel
readonly PKG_NPM_LABELS=`$BAZEL query --output=label 'kind("pkg_npm", //...)'`
readonly BASE=$HOME/Programming/chain-lib
readonly BAZEL_STAMP_PATH=$BASE/scripts/bazel_stamp_vars.sh
$BAZEL build --stamp --workspace_status_command=$BAZEL_STAMP_PATH $PKG_NPM_LABELS
for pkg in $PKG_NPM_LABELS ; do
 $BAZEL run --stamp --workspace_status_command=$BAZEL_STAMP_PATH -- ${pkg}.${NPM_COMMAND} --access public --tag ${TAG}
done
