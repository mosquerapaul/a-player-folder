var fs = require('fs');
const multer = require('multer');
const path = require('path');



function checkMP3magicNumbers(fileNumbers) {
    return  fileNumbers.toUpperCase().slice(0, 4) === 'FFFB' || 
            fileNumbers.slice(0, 6) === '494433';
}

const uploadController = (req, res) => {

    console.log(req.body);

    console.log('File loading');

    var upload = multer({
        storage: multer.memoryStorage()
    }).single('uploadFile');


	upload(req, res, function(err) {
        var buffer = req.file.buffer;
        var magicNum = buffer.toString('hex', 0, 4);
        var filename = req.file.originalname;
        var tempfilename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname);
        if (checkMP3magicNumbers(magicNum)) {
            fs.writeFile(
                './audio/' + filename, buffer, 
                'binary', 
                function(err) {
                    if(err) throw err;

                    console.log('File is uploded');
                    res.send('File is uploaded');
                });
        } else {
            res.send('File is not valid. Only .mp3 files are allowed');
        }
	})
}



module = module.exports = {uploadController};