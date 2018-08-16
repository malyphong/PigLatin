// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";
var firstWord;
var pigLating = [];

var translatedSentence = function(inputString) {
  console.log(inputString);
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



  if (inputString.charAt(0) === vowels[i]) {
    // console.log(inputString + way);
  } else if ((inputString.length > 1) && (firstVowel === 0)) {
    var wholeFinalWord = inputString.concat(way);
    // console.log(firstVowel);
  } else if (inputString.charAt(0) === "q" && inputString.charAt(1) === "u") {
    var wholeFinalWord = quEndOfword + quBegOfword + ay;
    // console.log(wholeFinalWord);
  } else if (consanants.includes(firstLetter)) {
    var wholeFinalWord = endOfword + begOfword + ay;
    // console.log(wholeFinalWord);
  } else {
   // alert(inputString);
  }

  return wholeFinalWord;
}



// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
    var inputSentence = $("#inputSentence").val();
    inputSentence = inputSentence.split(" ");
    // console.log(inputSentence);

    inputSentence.forEach(function(inputString) {
      console.log(inputString);
      // var inputString = [];
      var result = translatedSentence(inputString);
      console.log(result);
    })


    // var result = translatedSentence(inputSentence);

    // $('.translated').text(result);

  });
});










  //   var notAlphabet = slicedArray[i];
  //

     // if (inputSentence === vowels) {
     //   alert("vowel!!");
     // } else {
     //   alert("this is not a vowel");
     // }
     // }

// var slicedArray = inputSentence.split(" ");
