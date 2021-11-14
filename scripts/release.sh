set -u -e -o pipefail

# Call the script with argument "pack" or "publish"
readonly NPM_COMMAND=${1:-publish}
#Call the script with tag
readonly TAG=${2:-latest}
# Don't rely on $PATH to have the right version
readonly BAZEL=./node_modules/.bin/bazel
# Find all the npm packages in the repo
readonly PKG_NPM_LABELS=`$BAZEL query --output=label 'kind("pkg_npm", //...)'`
# Build them in one command to maximize parallelism
$BAZEL build $PKG_NPM_LABELS
# publish one package at a time to make it easier to spot any errors or warnings
for pkg in $PKG_NPM_LABELS ; do
  $BAZEL run -- ${pkg}.${NPM_COMMAND} --access public --tag ${TAG}
done