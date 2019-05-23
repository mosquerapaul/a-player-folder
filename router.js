
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;


/***********************************************
 * CONTROLLERS IMPORT
************************************************/
const {indexController} = require('./controller/indexController.js');
const {playlistController} = require('./controller/playlistController.js');
const uploadController = () => res.send('undefined controller');



/***********************************************
 * ROUTING RESOLV
************************************************/
app.get(['/'], indexController);
app.get(['/playlist'], playlistController);
app.post('/upload', uploadController);




// Server started at port
console.log(`Server started at port ${PORT} look at url: localhost:${PORT}`);
app.listen(PORT);



