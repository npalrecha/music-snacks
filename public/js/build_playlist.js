$(document).ready(function() {
    $("#loading").hide();
    $("#get-playlist-error").hide();
    playlist_poll();
});

function playlist_poll() {
    var playlist_id = parseInt($("#playlist_id").text());
    $.ajax({
        url: "../playlist/" + playlist_id,
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $("#loading").show();
        },
        success: function(data, textStatus, xhr) {
            $("#loading").hide();
        },
        error: function(xhr, textStatus, errorThrown) {
            $("#loading").hide();
            $("#get-playlist-error #message").html(textStatus + "<br/>" + errorThrown);
            $("#get-playlist-error").show();
        }
    });
}