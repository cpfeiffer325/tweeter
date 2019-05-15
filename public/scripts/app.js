// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {

  function createTweetElement(tweetData) {
    const user = tweetData.user;
    const avatar = user.avatars;
    
    const $tweet = $("<article>");
    const $header = $("<header>")
    const $div = $("<div>")
    const $footer = $("<footer>");

    const $avatar = $("<img>").attr("src", avatar.small).addClass("logo");
    const $name = $("<h2>").text(user.name).addClass("name");
    const $handle = $("<p>").text(user.handle).addClass("handle");

    $header.append($avatar).append($name).append($handle);
    console.log($header);

    $tweet.append($header).append($div).append($footer);
    console.log($tweet);
    
    // const tweet = $("<article>");
    // const header = $("<header>");

    // $("<img>").attr(avatar.small).appendTo(header);
    // const name = $("<h2>").add class.text(user.name)
    // $('<h2>').text(user.name).appendTo(header);
    // $('<p>').text(user.handle).appendTo(header);
    // console.log(header);
    return $tweet;
  }

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