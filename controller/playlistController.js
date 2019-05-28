var fs = require('fs');

const AUDIOFOLDER = './audio';

const playlistController = (req, res) => {
    var audioList;
    fs.readdir(AUDIOFOLDER, (err, files) => {
        files = files.filter(file => /\.mp3$/.test(file.toLocaleLowerCase()))
        console.log(files);
        audioList = files.reduce((ac, audio, ind, arr) => {
            ac += '<li class="audio">' + audio + '</li>';
            return ac;
        }, '<ol>');
        audioList += '</ol>';
        res.send(audioList);
    });
}

module = module.exports = {playlistController};