const opencollab = require('opencollab-lib')

// TODO: Initialization options
module.exports = function(program) {

	program
		.command('init <name> <description>')
		.version('0.0.0')
		.description('Initialize new OpenCollab repo')
		.action(async (name, description, options) => {
			try {
				let result = await opencollab.init(process.cwd(), { name, description })
			} catch(e) {
				console.log('Error: ', e)
			}
		})

}
