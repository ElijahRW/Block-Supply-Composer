# Block Supply Network

## Deployment Instructions
* Follow the [instalation instructions](https://hyperledger.github.io/composer/latest/installing/installing-prereqs) for Hyperledger Composer as outlined in the supplied link.
    * Note: Composer requires version `8.12.0` of npm in order to propperly opperate.

## Web App Instalation
In a sepperate directory pull from the [git repository](REPLACEME). Follow the instructions provided.

## Application Explanation:

### To validate block chain: 
* Ssh into Organization docker instance --> 
* run: `peer channel getinfo -c composerchannel`
*Example Blockchain info display:*
```
Blockchain info: {"height":3,"currentBlockHash":"cdgG77YM53sjAGT5kxoWVC9kWqa6gRb5qbLTSxLHNXc=","previousBlockHash":"A3a9HJkdJKG0Pch0pdK7bmtx4cKmaiGsdlIKQWgCgVI="}
```