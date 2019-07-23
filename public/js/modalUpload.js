const hideModal = function() {
    $('#modalUpload').fadeOut(1000);
}

const showModal = function() {
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

    $('#new-audio').on('click', function() {
        showModal();
    });
    $('#modalUpload').on('click', function(e) {
        if (e.target.id !== 'modal-background' && e.target.id !== 'modal-close') return;
        hideModal();
    });

})