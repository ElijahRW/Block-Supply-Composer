#! /bin/bash
source ~/.bash_profile 

nvm use 8.12.0

docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)