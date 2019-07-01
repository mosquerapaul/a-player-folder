$('#upload-form').submit(function () {
    $(this).ajaxSubmit({
        error: function (xhr) {
            userMessage(response, 3000);
            status('Error: ' + xhr.status);
        },
        success: function (response) {
            hideModal();
            userMessage(response, 3000);
        }
    });
    return false;
});