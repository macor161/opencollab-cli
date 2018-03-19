const config = require('../lib/config-loader')()
const getWeb3Accounts = require('../lib/get-web3-accounts')

module.exports = function(program) {

	program
		.command('accounts')
		.version('0.0.0')
		.description('List available web3 accounts')
		.action(async function (/* Args here */) {
			try {
                
        const accounts = await getWeb3Accounts()

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