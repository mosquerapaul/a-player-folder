var fs = require('fs');

const indexController = (req, res, next) => {
    fs.readFile('view/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        req.indexFile = data
        res.send(data);
    });
}

module = module.exports = {indexController};