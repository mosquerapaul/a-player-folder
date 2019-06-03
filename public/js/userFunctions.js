
$(function() {
    $('#loadList').on('click', function() {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            success: function(response) {
                console.log(`load success: \n${response}`);
                $('#faplayer').html(response);
            }
        });
    });
    $('#dbupdate').on('click', function() {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            success: function(response) {
                console.log(`load success: \n${response}`);
            }
        });
    });
    $('#new-audio').on('click', function() {
        $('#newFileBackground').fadeIn(1000);
    });
    $('#modal-close').on('click', function() {
        $('#newFileBackground').fadeOut(1000);
    });
    $('#newFileBackground').on('click', function() {
        $('#newFileBackground').fadeOut(1000);
    });

    $('#file-upload').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/audioupload',
            success: function(response) {
                console.log(`load success: \n${response}`);
            }
        });
    });

    $('#newFileBackground').hide();
})