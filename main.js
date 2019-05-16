var fs = require('fs');
const path = './audio/';
var audioList;

fs.promises.readdir(path)
.then(files => { console.log(files); audioList = files; });

