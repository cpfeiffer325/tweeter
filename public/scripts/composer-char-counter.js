$(document).ready(function() {
    $("textarea").on("input", function() {
        let textLength = $("textarea").val().length;
        let color = (textLength <= 140) ? "black" : "red";
        $("#counter").text(140 - textLength).css({color: color});
    });
});