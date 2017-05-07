var Web3 = require('web3');
var web3 = new Web3();

document.addEventListener('DOMContentLoaded', () => {

  web3.setProvider(new web3.providers.HttpProvider(
    'https://ropsten.infura.io/vyIfJZ7GKOTpI1V7QRzR'
  ));
  
  console.log(web3);
});
