const fs = require('fs');


exports.readFileOnPath = (dir) => {
    console.log(dir);
    const arrData = fs.readdirSync(`./static/${dir}`, (err, data) => {
        console.log(err);
    }).map(i => i);

    return arrData;
}


exports.writeFile = (file, path) => {
    console.log(path)
    fs.mkdirSync
}