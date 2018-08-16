// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";

var translatedSentence = function(inputSentence) {
  var firstLetter = inputSentence.charAt(0);
  var secondLetter = inputSentence.charAt(1);
  for (var i = 0; i < inputSentence.length; i +=1) {
    if (vowels.includes(inputSentence.charAt(i))) {
      var firstVowel = (inputSentence.charAt(i));
      break;

    }
  }
  var endOfword = inputSentence.slice(i, inputSentence.length);
  var begOfword = inputSentence.slice(0, i);



  if (inputSentence.charAt(0) === vowels[i]) {
    // console.log(inputSentence + way);
  }
  else if ((inputSentence.length > 1) && (firstVowel === 0)) {
    var wholeFinalWord = inputSentence.concat(way);
    // console.log(firstVowel);
  }
  else if (consanants.includes(firstLetter)) {
    var wholeFinalWord = endOfword + begOfword + ay;
    console.log(wholeFinalWord);
  }
  else {
   // alert(inputSentence);
     }
   }


// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
    var inputSentence = $("#inputSentence").val();
    var result = translatedSentence(inputSentence);
    $('.translated').text(result);

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
