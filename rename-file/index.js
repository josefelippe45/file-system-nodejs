const fs = require('fs');
//move and rename the file
// fs.renameSync('./rename-this.js', 'new-directory/renamed.js');

//move and rename directory
fs.renameSync('./new-directory/rename-this', './renamed');