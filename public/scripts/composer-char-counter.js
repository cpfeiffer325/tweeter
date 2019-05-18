$(document).ready(function() {
    $("textarea").on("input", function() {
        // checks length of the text input
        let textLength = $("textarea").val().length;
        // changes counter to red if exceeding 140 characters
        let color = (textLength <= 140) ? "black" : "red";
        // updates text counter on the app
        $("#counter").text(140 - textLength).css({color: color});
    });
});