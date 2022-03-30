/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// From server/data-files

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1648417613692
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1648504013692
  }
]

const createTweetElement = function(tweetObject) {
  let $tweet = (`
  <article class="tweet">
    <header>
      <img src ="${tweetObject.user.avatars}" alt="avatar goes here" class="avatars">
      <h2 class="handle">${tweetObject.user.handle}</h2>
      <p class="name">${tweetObject.user.name}</p>
    </header>
    <div class="tweets-main">
    <p class="content">${tweetObject.content.text}</p>
    <span class="daysAgo">${tweetObject.content.created_at}</span>
    <span class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </span>
    </div>
    </article>
    `);

  return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const generatedTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend(generatedTweet);
  }
};


//add an event listener that listens for the submit event

//prevent the default behaviour of the submit event (data submission and page refresh)

//create an AJAX POST request in client.js that sends the form data to the server.



$(document).ready(() => {
  renderTweets(data);
});