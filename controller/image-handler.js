
const { writeFile, readFileOnPath } = require('../services/fs-worker');

exports.addPhoto = (req, res) => {
    // console.log('FOTO', req.url);
    // const id = req.body.id;
    writeFile(req.file, req.url);

    res.status(200).json({
        data: "Image addet..."
    });
}

exports.getGallery = (req, res) => {

    const arrData = readFileOnPath(req.url);

    // console.log(arrData);

    res.status(200).json({
        data: arrData,
        message: 'Send gallery...'
    });

}