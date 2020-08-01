const fs = require('fs');
/**when Sync we have to wait to finish. nodejs is asynchronous where we don't have to wait basically
fs.readdirSync('/folder', (err, content)=>{
    if (err) return err;

    console.log(content);
}); */
//reading directories
//this one is asynchronous
fs.readdir('./', (err, content)=>{
    if (err) return err;

    console.log(content);
});

//reading file
//fs.readFile contains a sync version too.
//the second argument is an option, in this case utf-8 means a text file
fs.readFile('./dummy-data.html', 'UTF-8', (err, content)=>{
    if(err) return err;

    console.log(content);
});