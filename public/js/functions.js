var audiolistFiles;
var loadFiles = function() {
    $.ajax({
        type: 'GET',
        url: '/playlist',
        success: function(response) {
            $('#faplayer-audiolist').html(response.html);
            audiolistFiles = response.files;
            playingStatus.files = audiolistFiles;
            playingStatus.ready = true;
        }
    });
    userMessage('Playlist ready', 2000);
}

var dbupdate = function() {
    $.ajax({
        type: 'GET',
        url: '/playlist',
        success: function(response) {
            console.log(`load success: \n${response}`);
        }
    });
}


var userMessage = function (msg, timeDelay) {
    $("#urerMsg").empty().text(msg);
    $('#urerMsg').fadeIn(500);
    $('#urerMsg').delay(timeDelay).fadeOut(1000);
}


$(function() {
    loadFiles();
    $('#loadList').on('click', function() {
        loadFiles();
    });

    // NOT IMPLEMENTED
    $('#dbupdate').on('click', function() {
        dbUpdate();
    });


    $("#urerMsg").fadeOut(0);

})
