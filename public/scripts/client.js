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

const createTweetElement = function(tweetGen) {
  let $tweet = <article class="tweet">
    <header>
      <img src ="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-7.jpg" alt="avatar goes here" class="avatars"></img>
      <h2 class="handle">@PENGUINS4LYFE</h2>
      <p class="name">Oswald Cobblepot</p>
    </header>
    <div class="tweets-main">
    <p class="content"> hey im new here anyone else like penguins or what </p>
    <span class="daysAgo">5 days ago</span>
    <span class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </span>
    </div>
    </article>

  return $tweet;
}

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const element = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweet-body'.prepend(element))
  }
}

// // temporary hard coded tweets
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }


// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('.tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.