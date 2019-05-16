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

    $.ajax({
      url: "/tweets",
      type: "POST",
      data: $(this).serialize(),
      success: console.log("Got response")
    })  
    loadTweets();  
  })

  function loadTweets () {
    $.ajax({
      url: "tweets",
      type: "GET",
      success: renderTweets
    })
  }
  loadTweets();
  // tweet database
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

// takes an array of tweets and appends each one separately to the tweet container
  function renderTweets(tweets) {
    let value = [];
    for (let tweet in tweets) {
      value.push(createTweetElement(tweets[tweet]));
    }
    return $('#tweets-container').prepend(value);
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

  renderTweets(data);
});