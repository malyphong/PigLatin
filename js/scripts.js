// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";
var way = "way";





// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
   var inputSentence = $("#inputSentence").val();


  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < vowels.length; j++)
    if (inputSentence.length === 1 && inputSentence === vowels[j]) {
      alert(inputSentence + ay);
    }
    else if (inputSentence.charAt(0) === vowels[j] )
      alert(inputSentence + way);
}

  for (var i = 0; i < 1; i++) {
    for (var k = 0; k < consanants.length; k++)
    if (inputSentence.charAt(0) === consanants[k]) {
      var shift = inputSentence.charAt(0);
      var removed = inputSentence.slice(1);
      alert(removed + shift + ay);
    } else if (inputSentence.charAt(0) && inputSentence.charAt(1) === consanants[k]) {
      
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
