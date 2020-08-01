const fs = require('fs');
//first parameter is the file, the second is the data, the third is the options
//it's possible to change the directory. for that, pass tha directory on the first parameter
fs.writeFile('./dummy-data.html', 'FILE CREATED \n\n', 'utf8', (err)=>{
    if (err) return err;

    console.log('File created!');
});
//appending data
fs.appendFile('./dummy-data.html', 'EXTRA DATA APPENDED', 'utf8', (err)=>{
    if (err) return err;

    console.log('File saved!');
});