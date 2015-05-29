var findReplace = function(input) {
  var words = input[0].split(" ");
  var replacedWord = input[1];
  var replacingWord = input[2];

  for (var counter=0; counter < (words.length); counter++) {
    if (words[counter].toLowerCase() == replacedWord.toLowerCase()) {
      words[counter] = replacingWord;
    }
  }
  console.log(words);
  console.log(words.join());
  return words.join(" ");
}

$(document).ready(function() {
  $("form#find-replace-form").submit(function(event) {
    $(".resultreplace").text(findReplace([$("input#sentence").val(), $("input#word1").val(), $("input#word2").val() ]));
    $("#resultdiv").show();
    event.preventDefault();
  });
});
