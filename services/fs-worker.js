

const fs = require('fs');

exports.readFileOnPath = (dir) => {
    // console.log(dir);
    const arrData = fs.readdirSync(`./static${dir}`, (err, data) => {
        console.log(err);
    }).map(i => i);

    return arrData;
}

exports.writeFile = (file, path) => {
    const { buffer, originalname, size, mimetype } = file;
    const fullpath = `./static${path}`;
    const type = mimetype.split('/')[1];
    const newName = Date.now();
    const newFileName = `${newName}.${type}`;

    this.createFolder(fullpath);

    fs.writeFile(`${fullpath}${newFileName}`, buffer, (err) => {
        if (err) throw err;
        console.log('Save file ==> ' + newFileName + ' ' + (size / 1024).toFixed(2) + ' Kb');
    });
    return newFileName;
}

exports.createFolder = (dir) => {

    if (fs.existsSync(dir)) {
        console.log('path exists...')
    } else {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`CREATE FOLDER => folder ${dir} created`);
    }

}