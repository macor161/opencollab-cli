const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(process.env['ETHEREUM_RPC_URL'] || 'http://localhost:8545'))

module.exports = async function getAccounts() {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((err, accounts) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(accounts)
        }
      })
    })
  }