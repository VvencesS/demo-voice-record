$(function() {
    $('#btn-wait-record').click(function(e) {
        $('.wait-record').addClass('display-none');
        $('.paused').removeClass('display-none');
    });

    $('#btn-paused-record').click(function() {
        $('.paused').addClass('display-none');
        $('.preview').removeClass('display-none');
    });

    $('.btn-save').click(function(e) {
        alert('Save');
    });
});