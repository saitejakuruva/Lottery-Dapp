const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
//console.log(interface);
//console.log(bytecode);
const provider = new HDWalletProvider(
  'joy nuclear cause beauty strike quick priority upset hello strategy manual shadow',
  'https://rinkeby.infura.io/v3/14a6144786774f5fbbad6c0ef7037b5f'
);
//console.log(provider);
const web3 = new Web3(provider);
//console.log(web3);

//web3.eth.getAccounts().then((accounts) => console.log(accounts));

(async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x'+bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
})();
