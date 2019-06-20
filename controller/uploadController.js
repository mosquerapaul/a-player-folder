var fs = require('fs');
const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './audio')
	},
	filename: function(req, file, callback) {
		console.log(file);
		callback(null, file.originalname)
	}
})


const uploadController = (req, res) => {
	var upload = multer({
		storage: storage,
        fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname)
			if (ext !== '.mp3') {
				return callback(res.send('Only .mp3 files are allowed'), null)
			}
			callback(null, true)
		}
	}).single('uploadFile')
	upload(req, res, function(err) {
        console.log('File is uploaded');
        res.redirect('/');
	})
}



module = module.exports = {uploadController};