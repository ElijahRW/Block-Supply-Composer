#! /bin/bash
source ~/.bash_profile 

nvm use 8.12.0

composer archive create -t dir -n ../block-supply-composer
composer network install --card PeerAdmin@hlfv1 --archiveFile block-supply@0.0.1.bna
composer network start --networkName block-supply --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@block-supply
composer-rest-server --explorer true --card admin@block-supply --n never -p 3000
# composer-rest-server -c admin@block-supply -n never -d n -w true