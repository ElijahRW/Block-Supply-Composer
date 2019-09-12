# Block Supply Network

## Deployment Instructions
* Follow the [instalation instructions](https://hyperledger.github.io/composer/latest/installing/installing-prereqs) for Hyperledger Composer as outlined in the supplied link.
    * Note: Composer requires version `8.12.0` of npm in order to propperly opperate.
* To start up the Fabric Network, run `./fabric_construction/build_fabric.sh`
* To launch the Blockchain Application to the Fabric Network, run `./fabric_construction/deploy.sh`
* To update the Blockchain Application to a new version on the Fabric Network
    * Update the variable `version` to the next highest version number.
    * Update the corresponding numbers within the `./fabric_construction/rebuild.sh` script
    * Run `./fabric_construction/rebuild.sh`

## Web App Instalation
In a sepperate directory pull from the [git repository](REPLACEME). Follow the instructions provided.

### To validate block chain: 
* Ssh into Organization docker instance. This can be done by:
    * Run `docker ps -a` and selecting the docker ID of the running blockchain application.
    * Run `docker exec -it {DOCKER ID} bash`
    * run: `peer channel getinfo -c composerchannel`
    
*Example Blockchain info display:*
```
Blockchain info: {"height":3,"currentBlockHash":"cdgG77YM53sjAGT5kxoWVC9kWqa6gRb5qbLTSxLHNXc=","previousBlockHash":"A3a9HJkdJKG0Pch0pdK7bmtx4cKmaiGsdlIKQWgCgVI="}
```