const Web3 = require('web3')
const config = require('../lib/config-loader')()

module.exports = function(program) {

	program
		.command('accounts')
		.version('0.0.0')
		.description('List available web3 accounts')
		.action(async function (/* Args here */) {
			try {
        const web3 = new Web3(new Web3.providers.HttpProvider(process.env['ETHEREUM_RPC_URL'] || 'http://localhost:8545'))
        
        const accounts = await getAccounts(web3)

        accounts.forEach((account, i) => 
          console.log(`#${i+1}: ${account}`)
        )
			  
			} catch (e) {
				console.log('Error execcuting command: ', e)
			}
		})

}


async function getAccounts(web3) {
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