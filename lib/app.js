var Web3 = require('web3');
var web3 = new Web3();

document.addEventListener('DOMContentLoaded', () => {

  web3.setProvider(new web3.providers.HttpProvider(
    'https://ropsten.infura.io/vyIfJZ7GKOTpI1V7QRzR'
  ));
  window.eth = web3.eth;
  window.web3 = web3;
  // for (var i = 0; i < 10; i++) {
  //   console.log(web3.eth.getBlock(web3.eth.blockNumber - i));
  // }

});
