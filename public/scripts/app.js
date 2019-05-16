$(document).ready(function() {

  $("#composeTweet").on("submit", function(event) {
    event.preventDefault();

    let inputLength = $("textarea").val().length;
    let input = $("textarea").val().trim();

    if (inputLength > 140) {
      return alert("Ahhhhhh too many characters!");
    }
    if (!input) {
      return alert ("Please tweet something :(");
    }

    let reset = (() => {
      console.log("Got response");
      loadTweets();
      this.reset();
      $("#counter").text(140);
    })

    $.ajax({
      url: "/tweets",
      type: "POST",
      data: $(this).serialize(),
      success: reset
    })
  })

  function loadTweets () {
    $.ajax({
      url: "/tweets",
      type: "GET",
      success: renderTweets
    })
  }
  loadTweets();

// takes an array of tweets and appends each one separately to the tweet container
  function renderTweets(tweets) {
    $("#tweets-container").empty();
    tweets.forEach(tweet => {
      $("#tweets-container").prepend(createTweetElement(tweet))
      console.log("rendering completed")
    });
  }
  
// compiles the elements of the tweet into one article for rendering
  function createTweetElement(tweetData) {

// separate variables to store user and avatar object data
    const user = tweetData.user;
    const avatar = user.avatars;

// tweeter element and its main components   
    const $tweet = $("<article>");
    const $header = $("<header>");
    const $footer = $("<footer>");

// elements to be added to tweeter, header, and footer
    const $avatar = $("<img>").attr("src", avatar.small).addClass("logo");
    const $name = $("<h2>").text(user.name).addClass("name");
    const $handle = $("<p>").text(user.handle).addClass("handle");
    const $content = $("<div>").text(tweetData.content.text);
    const $time = $("<p>").text(tweetData.created_at);

// append elements to header, footer and then to tweeter
    $header.append($avatar).append($name).append($handle);
    $footer.append($time);
    $tweet.append($header).append($content).append($footer);
    
// return the full tweet to be appended to the tweets-container
    return $tweet;
  }
});