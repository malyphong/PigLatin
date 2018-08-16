// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";
var firstWord;
var pigLatin = [];

var translatedSentence = function(inputString) {
  var firstLetter = inputString.charAt(0);
  var secondLetter = inputString.charAt(1);

  for (var i = 0; i < inputString.length; i +=1) {
    if (vowels.includes(inputString.charAt(i))) {
      var firstVowel = (inputString.charAt(i));
      break;
    }
  }

  var endOfword = inputString.slice(i, inputString.length);
  var begOfword = inputString.slice(0, i);
  var quEndOfword = inputString.slice(2, inputString.length);
  var quBegOfword = inputString.slice(0, 2);

  if (inputString.charAt(0) === "a" || inputString.charAt(0) === "e" || inputString.charAt(0) === "i" || inputString.charAt(0) === "o" || inputString.charAt(0) === "u") {
    var wholeFinalWord = inputString + way;
  } else if ((inputString.length > 1) && (firstVowel === 0)) {
    var wholeFinalWord = inputString.concat(way);
  } else if (inputString.charAt(0) === "q" && inputString.charAt(1) === "u") {
    var wholeFinalWord = quEndOfword + quBegOfword + ay;
  } else if (consanants.includes(firstLetter)) {
    var wholeFinalWord = endOfword + begOfword + ay;
  } else {
   var wholeFinalWord = inputString;
  }
  return wholeFinalWord;
}

// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
    var inputSentence = $("#inputSentence").val();
    inputSentence = inputSentence.split(" ");

    inputSentence.forEach(function(inputString) {
      var result = translatedSentence(inputString);
      pigLatin.push(result);
      var finalResult = pigLatin.join(" ");
      $("#translated").text(finalResult);
    })
  });
});
