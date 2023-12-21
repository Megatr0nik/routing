const fs = require('fs');
const uri = ''

exports.readFileOnPath = (dir) => {
    console.log(dir);
    const arrData = fs.readdirSync(`./static/${dir}`, (err, data) => {
        console.log(err);
    }).map(i => i);

    return arrData;
}


exports.writeFile = (file, path) => {
    const { buffer, originalname, size } = file;
    console.log(file)
    console.log('FILE', path)
    fs.mkdirSync(`./static${path}`, { recursive: true });
    fs.writeFile(`./static${path}${originalname}`, buffer, (err) => {
        if (err) throw err;
        console.log('Save...' + size);
    });
}