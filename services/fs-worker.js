

const fs = require('fs');

exports.readFileOnPath = (dir) => {
    // console.log(dir);
    const arrData = fs.readdirSync(`./static/person${dir}`, (err, data) => {
        console.log(err);
    }).map(i => i);

    return arrData;
}

exports.writeFile = (file, path) => {
    const { buffer, originalname, size } = file;
    const fullpath = `./static${path}`;

    // console.log(file)
    // console.log('FILE', path)

    if (!fs.existsSync(fullpath)) {
        this.createFolder(fullpath);
    }

    fs.writeFile(`${fullpath}${originalname}`, buffer, (err) => {
        if (err) throw err;
        console.log('Save...' + size);

    });
    return originalname;
}

exports.createFolder = (dir) => {
    // console.log(__dirname);

    fs.mkdirSync(dir, { recursive: true });
    console.log(`CREATE FOLDER => folder create${dir}`);
}