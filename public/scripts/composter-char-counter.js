// $(document).ready() {
// const myTextArea = document.getElementById("#tweet-text");
// const remainCharsText = document.getElementsByClassName('.counter');
// const MAX_CHARS = 140;

// myTextArea.addEventListener('input', () => {
//   const remaining = MAX_CHARS - myTextArea.value.length;

//   console.log(remaining)
//   remainingCharsText.textContent = `${remaining} characters remaining`;
// });
// };

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