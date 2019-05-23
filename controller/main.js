var fs = require('fs');

const {playlist} = require('../view/playlist');

const path = './audio/';
var audioList;

fs.promises.readdir(path)
.then(files => { console.log(files); audioList = files; });

const faplayer = document.getElementById("faplayer");
faplayer.innerHTML(playList(audioList));