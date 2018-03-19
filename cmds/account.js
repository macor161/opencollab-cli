const inquirer = require('inquirer')
const getWeb3Accounts = require('../lib/get-web3-accounts')
const config = require('../lib/config-loader')()
const fs = require('fs')
const path = require('path')

module.exports = function(program) {

	program
		.command('account')
		.version('0.0.0')
		.description('Choose web3 account')
		.action(async () => {

			const accounts = await getWeb3Accounts()

			const answers = await inquirer.prompt([{
				type: 'list',
				name: 'account',
				message: 'Select an account:',
				choices: formatAccountChoices(accounts)
			}])
			
      const newConfig = Object.assign(config || {}, { account: answers.account })
      fs.writeFileSync(path.join(process.cwd(), '.opencollab.json'), JSON.stringify(newConfig))
			
		})

}


function formatAccountChoices(accounts) {
	return accounts.map((account, i) => ({
		name: `${i+1}) ${account}`,
		value: account
	})).concat([new inquirer.Separator()])
}
