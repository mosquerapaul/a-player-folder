var fs = require('fs');

const AUDIOFOLDER = './audio';

/****************************************
 *          PLAYLIST CONTROLLER
 * Read the /audio folder to find .mp3 files 
 * and send them to the next MW as req.files
 ****************************************/

const playlistController = (req, res, next) => {
    var audioList;
    fs.readdir(AUDIOFOLDER, (err, files) => {
        files = files.filter(file => /\.mp3$/.test(file.toLocaleLowerCase()))
        //console.log(files);
        req.files = files;
        next();
    });
}


/****************************************
 *          PLAYLIST CONTROLLER
 * It will take req.files and save them to a DB
 * NOT IMPLEMENTED
 ****************************************/
const playlistToDBController = (req, res, next) => {
    console.log('PlaylistToDBController not implemented yet')
    next();
}


const playlistShowController = (req, res, next) => {
    var files = req.files;
    audioList = files.reduce((ac, audio, ind, arr) => {
        ac += '<li class="audio">' + audio + '</li>';
        return ac;
    }, '<ol>');
    audioList += '</ol>';
    res.send(audioList);
    next();
}

module = module.exports = {
    playlistController, 
    playlistToDBController, 
    playlistShowController};