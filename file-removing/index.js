const fs = require('fs');
//removing directories
//when using sync we doesn't need a callback function
// fs.rmdirSync('./remove-this');

//removing files. using try catch to catch the err with sync methods
try {
    fs.unlinkSync('./remove-this/remove.txt');
} catch(err){
    console.log(err);
};
