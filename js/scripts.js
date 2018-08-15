// business logic
var consanants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'qu'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

// if ()






// user interface
$(document).ready(function() {
 $('#input-form').submit(function(event) {
   event.preventDefault();
   var inputSentence = $("#inputSentence").val();
console.log(inputSentence);
 });
});
