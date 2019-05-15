// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {

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

// tweet database
  const tweetData = {
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
  }

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});