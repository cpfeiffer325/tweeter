$(document).ready(function() {
  $(".alert").slideUp();

  $("#composeTweet").on("submit", function(event) {
    event.preventDefault();

    // validating if tweet is too long or is empty
    let inputLength = $("textarea").val().length;
    let input = $("textarea").val().trim();

    if (inputLength > 140) {
      $(".alert p").text("Ahhhhhh too many characters!");
      $(".alert").slideDown();
      preventDefault();
      
    }
    if (!input) {
      $(".alert p").text("Please tweet something");
      $(".alert").slideDown();
      $("textarea").focus();
    }

    // reset function to be called during post that clears entry and resets character counter
    let reset = (() => {
      console.log("Got response");
      loadTweets();
      this.reset();
      $("#counter").text(140);
      $(".alert").slideUp();
      $("textarea").focus();
    })

    // post request from new tweet
    $.ajax({
      url: "/tweets",
      type: "POST",
      data: $(this).serialize(),
      success: reset
    })
  })

  // loading and rendering new tweets into feed
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
    // clears tweet container
    $("#tweets-container").empty();
    tweets.forEach(tweet => {
      $("#tweets-container").prepend(createTweetElement(tweet))
      console.log("rendering completed")
    });
  }

  // formating time function
  function formatTime (time) {
    var diff = Math.floor((Date.now() - time) / 1000);
    var interval = Math.floor(diff / 31536000);
  
    if (interval >= 1) {
      return interval + " years" + " ago";
    }
    interval = Math.floor(diff / 2592000);
    if (interval >= 1) {
      return interval + " months" + " ago";
    }
    interval = Math.floor(diff / 604800);
    if (interval >= 1) {
      return interval + " weeks" + " ago";
    }
    interval = Math.floor(diff / 86400);
    if (interval >= 1) {
      return interval + " days" + " ago";
    }
    interval = Math.floor(diff / 3600);
    if (interval >= 1) {
      return interval + " hours" + " ago";
    }
    interval = Math.floor(diff / 60);
    if (interval >= 1) {
      return interval + " minutes" + " ago";
    }
    return "<1m" + " ago";
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
    const $time = $("<p>").text(formatTime(tweetData.created_at));

    // append elements to header, footer and then to tweeter
    $header.append($avatar).append($name).append($handle);
    $footer.append($time);
    $tweet.append($header).append($content).append($footer);
    
    // return the full tweet to be appended to the tweets-container
    return $tweet;
  }
  //
  $("button").click(function() {
    $(".new-tweet").slideToggle().select();
    $("textarea").focus();
  })
});