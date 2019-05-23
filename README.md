# Lottery-Dapp
Decentralised Dapp 
Please note the following things carefully. Ensure that you are working with the following dependencies and also be careful about the version/
As this Blockchain technology is in it's earlier stages each and every time you should the version of the dependency that you are working on.

Please install the following dependencies before building this Dapp

1)Node version > 10.5
just click on the below link and follow through the procedure it's simple 
https://nodejs.org/en/
just type node -v in your command prompt to ensure the version of the node that you have installed.

2)solidy compiler 
I have ude 0.4.17 version but be sure that you install the same version of the solidity compiler that you have used in your contract(pragma)
npm install solc@0.4.17

3)Ganache-cli(Local Ethereum network)
npm install ganache-cli

4)Truffle Hd Wallet Provider(Which have access to all our accounts)
npm install --save truffle-hdwallet-provider

5) Web3(Through which we can interact from our browser to Ethereum network)
npm install --save web@1.0.0-beta.37

6)Metamask
Please store your menomonic phrase safely which helps us a lot deploy the contract.

7)Infura signup
Generate the api key which help to interact with the blockchain

After just installing all these dependencies deploy the contrcat called lottery.sol which provide us interface(abi) and bytecode 
and the address of the contract where the contract has been deployed to in the ethereum network.
By abi and bytecode we can create js object which is the replica of the contrcat object present in the Ethereum network. through which we can interact with our Dapp.



