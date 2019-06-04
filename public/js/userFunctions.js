const hideModal = () => {
    $('#modalUpload').fadeOut(1000).html("");
}

const showModal = () => {
    $.ajax({
        type: 'GET',
        url: '/modal-upload',
        success: function(response) {
            $('#modalUpload').html(response).fadeIn(1000);
        }
    });
}


$(function() {
    $('#modalUpload').hide();
    $('#loadList').on('click', function() {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            success: function(response) {
                $('#faplayer').html(response);
            }
        });
    });


    // NOT IMPLEMENTED
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
        showModal();
    });
    $('#modalUpload').on('click', function(e) {
        if (e.target.id !== 'modal-background' && e.target.id !== 'modal-close') return;
        hideModal();
    });

    // NOT IMPLEMENTED
    $('#file-upload').on('click', function() {
        $.ajax({
            type: 'POST',
            url: '/audioupload',
            success: function(response) {
                console.log(`load success: \n${response}`);
            }
        });
    });

})