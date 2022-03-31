$(document).ready(function () {
  let maxChars = 140;

  $("#tweet-text").keydown(function() {
    let charsLeft = maxChars - $(this).val().length;
    $(".counter").text(charsLeft);
    if (charsLeft < 0) {
      $(".counter").addClass("red-text");
    } else {
      $(".counter").removeClass("red-text");
    }
  });
});