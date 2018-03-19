const fs = require('fs')
const path = require('path')


module.exports = function() {
    try {        
        let content = fs.readFileSync(path.join(process.cwd(), '.opencollab.json'))
        return JSON.parse(content)
    } catch(e) {
        return null
    }
}