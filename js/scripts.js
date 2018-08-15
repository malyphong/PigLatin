// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";






// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
   var inputSentence = $("#inputSentence").val();



  // if (inputSentence.length === 1) {
  //   // $('#translated').text(inputSentence + ay);
  //   alert(inputSentence + "ay");
  // }
  for (var i = 0; i <inputSentence.length; i++) {
    for (var j = 0; j <vowels.length; j++)
    if (inputSentence.length === 1 && inputSentence === vowels[j]) {
      // $('#translated').text(inputSentence + ay);
      alert(inputSentence + ay);
  }
}
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
