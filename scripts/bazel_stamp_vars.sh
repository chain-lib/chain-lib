#!/bin/bash
readonly BASE=$HOME/Programming/chain-lib
echo STABLE_VERSION_NUMBER $(cat $BASE/scripts/VERSION.txt)

file:{BASE}/chain-lib-cardano-api-{STABLE_VERSION_NUMBER}.tgz

if grep -Fxq "development" $BASE/scripts/isdevelopment.txt
then
    echo CHAIN_LIB_CARDANO_API file:$BASE/chain-lib-cardano-api-$(cat $BASE/scripts/VERSION.txt).tgz
else
    echo CHAIN_LIB_CARDANO_API $(cat $BASE/scripts/VERSION.txt)
fi