// business logic
var consanants = ['qu', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', ];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";





// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
   var firstLetter = inputSentence.charAt(0);
   var secondLetter = inputSentence.charAt(1);
   var inputSentence = $("#inputSentence").val();
    for (var h = 0; h < inputSentence.length; 1++) {
      if (vowels.includes(inputSentence.charAt(h))) {
        var firstVowel = h;
        break;
      }
    }

    var endOfword = inputSentence.slice(firstVowel, inputSentence.length);
    var begOfword = inputSentence.slice(0, firstVowel);

  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < vowels.length; j++)
    if (inputSentence.length === 1 && inputSentence === vowels[j]) {
      alert(inputSentence + ay);
    }
    else if (inputSentence.charAt(0) === vowels[j]) {
      alert(inputSentence + way);
    }
    }
  for (var m = 0; m < 1; m++) {
    for (var k = 0; k < consanants.length; k++)
    if (inputSentence.charAt(0) === consanants[k]) {
      var shift1 = inputSentence.charAt(0);
      var removed1 = inputSentence.slice(1);
      alert(removed1 + shift1 + ay);
    else if (consanants.includes(firstLetter)) {
      var wholeFinalWord = endOfword + begOfword + ay;
      return combinedWord;
      else {
        return inputSentence;
      }
    }
    }

      // var shift2 = (inputSentence.charAt(0) + inputSentence.charAt(1));
      // var removed2 = inputSentence.slice(2);
      // alert(removed2 + shift2 + ay);



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
