// business logic
var consanants = ['qu', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', ];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";

var translatedSentence = function(inputSentence) {

 //
 //  for (var h = 0; h < inputSentence.length; h++) {
 //   if (vowels.includes(inputSentence.charAt(h))) {
 //     var firstVowel = h;
 //     break;
 // }
// }
  var firstLetter = inputSentence.charAt(0);
  var secondLetter = inputSentence.charAt(1);

  var endOfword = inputSentence.slice(firstVowel, inputSentence.length);
  var begOfword = inputSentence.slice(0, firstVowel);

    for (var i = 0; i < 1; i++) {
      for (var j = 0; j < vowels.length; j++) {

      var firstVowel = vowels[j];

      if (inputSentence.charAt(0) === vowels[j]) {
        console.log(inputSentence + way);
      }
      else if ((inputSentence.length > 1) && (firstVowel === 0)) {
       var wholeFinalWord = inputSentence.concat(way);
        console.log(wholeFinalWord);
      }
      else if (consanants.includes(firstLetter)) {
        wholeFinalWord = endOfword + begOfword + ay;
       console.log(endOfword);
      }
      else {
       // alert(inputSentence);
     }
   }
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
