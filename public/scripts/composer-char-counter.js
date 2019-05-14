$(document).ready(function() {
    console.log("char counter is still running!")

    $("textarea").on("input", function() {
        let char = 0;
        char = $("textarea").val().length;
        if (char > 140) {
            $("span.counter").text(140 - char).css({color: "red"});
        } else {
            $("span.counter").text(140 - char).css({color: "black"});
		}
      });
  });