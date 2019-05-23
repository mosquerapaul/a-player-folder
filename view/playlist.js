const playList = (list) => {
    '<!-- PLAY LIST --> '
    + '<div id="playlist">' +

    list.reduce((acu, item, index) => {

        acu += `<p id="${index}">` + item + '</p>';
    }, '');
        
    + '</div>'
}

exports = module.exports = {
    playList
}