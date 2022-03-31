/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// From server/data-files

//PREVENT XSS WITH ESCAPING 
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//FUNCTION TO GENERATE TWEETS
const createTweetElement = function(tweetObject) {
  //IMPORT HTML FROM INDEX AND IMPLEMENET INTO FUNCTION USING JQUERY
  let $tweet = (`
  <article class="tweet">
    <header>
      <img src ="${escape(tweetObject.user.avatars)}" alt="avatar goes here" class="avatars">
      <h2 class="handle">${escape(tweetObject.user.handle)}</h2>
      <p class="name">${escape(tweetObject.user.name)}</p>
    </header>
    <div class="tweets-main">
    <p class="content">${escape(tweetObject.content.text)}</p>
    <span class="daysAgo">${timeago.format(tweetObject.created_at)}</span>
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

//FUNCTION TO RENDER THE GENERATED TWEETS
const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const generatedTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend(generatedTweet);
  }
};
// AJAX POST && ERRORS
let addTweet = () => {
  $('form').on('submit', function(event) {
    event.preventDefault();
    //ERROR TOO MANY CHARACTERS
    if ($("#tweet-text").val().length > 140) {
      $('.error-message').text("Error! You must limit your tweets to 140 characters!").slideDown();
    // ERROR NO INPUT
    } else if ($("#tweet-text").val().length === 0) {
      $('.error-message').text("Please input text into the field").slideDown();
    } else {
    $('.error-message').slideUp();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
    }).then(() => {
      loadTweets();
  }).catch();
   //CLEAR INPUT FIELD AFTER POSTING A TWEET
    $('.new-tweet').find('form').trigger('reset');
   //RESET THE CHARACTER COUNTER AFTER POSTING A TWEET
    $('.counter').text(140);
  };
})
};
// Ajax GET
let loadTweets = () => {
  $.ajax({
    type: "GET",
    url: "/tweets",
    data: "data"
  }).then((data) => {
    renderTweets(data);
  }).catch()
};


$(document).ready(() => {
addTweet();
loadTweets();
});
