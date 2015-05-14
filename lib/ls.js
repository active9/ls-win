var path = require('path'),
    system = require('shelljs');

module.exports = function() {
	system.exec('dir ' + path.resolve(process.cwd()), function(code, output) {
		// Debugging console.log(output);
	});
}