const fs = require('fs');


const readFileOnPath = (dir) => {
    console.log(dir);
    const arrData = fs.readdirSync(`./static/${dir}`, (err, data) => {
        console.log(err);
    }).map(i => i);

    return arrData;
}


exports.readFileOnPath = readFileOnPath;