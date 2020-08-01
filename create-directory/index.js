const fs = require('fs');
//condition to know if a directory exists or not
fs.access('./folder', (error) => {
    if (error) {
        console.log('the folder does not exist');
        //mkdir is similar to console command
        fs.mkdir('folder', (error) => {
            if (error) throw error;
            //where to create the folder, plus creating a file.
            fs.writeFile('./folder/data.html', 'JUST CREATED', (error) => {
                if (error) throw error;
            });
        });
    };
});
