const opencollab = require('opencollab-lib')
const configLoader = require('../lib/config-loader')

// TODO: Initialization options
module.exports = function(program) {

	program
		.command('init <name> <description>')
		.version('0.0.0')
		.description('Initialize new OpenCollab repo')
		.action(async (name, description, options) => {
			const config = configLoader()

			try {
				console.log(config)
				//console.log(options.config.key('account'))
				//let result = await opencollab.init(process.cwd(), { name, description })
			} catch(e) {
				console.log('Error: ', e)
			}
		})

}
