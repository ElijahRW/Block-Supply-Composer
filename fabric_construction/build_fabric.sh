#! /bin/bash
source ~/.bash_profile 

nvm use 8.12.0

cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./startFabric.sh
./createPeerAdminCard.sh