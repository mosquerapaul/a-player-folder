var fs = require('fs');

const modalUploadController = (req, res, next) => {
    fs.readFile('view/modal-upload.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        req.modalUpload = data;
        res.send(data);
    });
}

module = module.exports = {modalUploadController};