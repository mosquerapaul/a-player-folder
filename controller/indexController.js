var fs = require('fs');

const indexController = (req, res, next) => {
    fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.send(data);
    });
}

module = module.exports = {indexController};