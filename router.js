
const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;


/***********************************************
 * CONTROLLERS IMPORT
************************************************/
const {indexController} = require('./controller/indexController.js');
const {
    playlistController, 
    playlistToDBController, 
    playlistShowController
} = require('./controller/playlistController.js');
const {dbupdateController} = require('./controller/dbupdateController.js');
const {modalUploadController} = require('./controller/modalUploadController.js');
const {uploadController} = require('./controller/uploadController.js');

/***********************************************
 *  ENCODING PARAMETERS
************************************************/
app.use(bodyParser.urlencoded({extended: true}));


/***********************************************
 * ROUTING RESOLV
************************************************/
app.get(['/', '/public', '/public/index.html'], indexController);
app.get(['/', '/playlist'], playlistController);
app.get(['/playlist'], playlistToDBController);
app.get(['/playlist'], playlistShowController);
app.get(['/dbupdate'], dbupdateController);
app.get('/modal-upload', modalUploadController);
app.post(['/file-upload', '/audioupload'], uploadController);


/***********************************************
 * STATIC FILES 
************************************************/
app.use( '/public', express.static('public'));

/*
 * STATIC FILES 
************************************************/
app.use( '/public', express.static('public'));



// Server started at port
console.log(`Server started at port ${PORT} look at url: localhost:${PORT}`);
app.listen(PORT);



