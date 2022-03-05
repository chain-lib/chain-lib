# Call the script with argument "pack" or "publish"
readonly ran1=$(shuf -i 0-32000 -n1)
readonly ran2=$(shuf -i 0-100 -n1)
readonly ran3=$(shuf -i 0-100 -n1)
readonly ran="$ran1.$ran2.$ran3"
readonly VERSION=${1:-$ran}
readonly DEVELOPMENT=development

touch ./scripts/VERSION.txt
> ./scripts/VERSION.txt
echo ${VERSION} >> ./scripts/VERSION.txt

touch ./scripts/isdevelopment.txt
> ./scripts/isdevelopment.txt
echo ${DEVELOPMENT} >> ./scripts/isdevelopment.txt

sudo yarn cache clean @chain-lib/cardano-api
sudo rm -rf ./node-modules/@chain-lib/cardano-api
sudo rm *.tgz
sudo yarn remove @chain-lib/cardano-api
./scripts/release.sh pack latest ${VERSION}

rm ./scripts/VERSION.txt
rm ./scripts/isdevelopment.txt

sudo yarn add --dev file:./chain-lib-cardano-api-${VERSION}.tgz
sudo yarn install --force
cd ./packages/test-projects/test-vue
# Install for vue project
sudo yarn remove @chain-lib/cardano-api
sudo yarn remove @chain-lib/cardano-components
sudo yarn add file:../../../chain-lib-cardano-api-${VERSION}.tgz
sudo yarn add file:../../../chain-lib-cardano-components-${VERSION}.tgz
sudo yarn install --force

