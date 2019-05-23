var fs = require('fs');

const AUDIOFOLDER = './audio';

const playlistController = (req, res) => {
    var audioList;
    fileList = new Promise( (resolve, reject) => {
        fs.readdir(AUDIOFOLDER, (err, files) => {
            console.log(files);
            audioList = files.reduce((ac, audio, ind, arr) => {
                ac += '<li class="audio">' + audio + '</li>';
                return ac;
            }, '<ol>');
            audioList += '</ol>';
            res.send(audioList);
        });
    });
}

module = module.exports = {playlistController};