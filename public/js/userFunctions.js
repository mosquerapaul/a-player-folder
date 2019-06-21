const hideModal = () => {
    $('#modalUpload').fadeOut(1000);
}

const showModal = () => {
    if($('#modalUpload').html() === '') {
        $.ajax({
            type: 'GET',
            url: '/modal-upload',
            success: function (response) {
                $('#modalUpload').html(response).fadeIn(1000);
            }
        });
    } else {
        $('#modalUpload').fadeIn(1000);
    }

}


$(function() {
    $('#modalUpload').hide(0);
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

})