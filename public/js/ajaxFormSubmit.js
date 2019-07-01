$('#upload-form').submit(function () {
    console.log('Loading file');
    $("#status").empty().text("File is uploading...");
    var sendMsg;
    $(this).ajaxSubmit({
        error: function (xhr) {
            console.log('Error loading file');
            status('Error: ' + xhr.status);
        },

        success: function (response) {
            hideModal();
            $("#urerMsg").empty().text(response);
            console.log(response);
            $('#urerMsg').fadeIn(1000);
            $('#urerMsg').delay(4000).fadeOut(1000);
        }
    });
    return false;
});