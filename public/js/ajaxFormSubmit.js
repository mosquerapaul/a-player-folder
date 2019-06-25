$('#upload-form').submit(function() {
    $("#status").empty().text("File is uploading...");
    console.log('Loading file');
    $(this).ajaxSubmit({
        error: function (xhr) {
            console.log('Error loading file');
            status('Error: ' + xhr.status);
        },

        success: function (response) {
            $("#urerMsg").empty().text(response);
            console.log(response);
        }
    });
    hideModal();
    return false;
});