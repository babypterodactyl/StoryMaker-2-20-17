alert("Welcome to the Story Maker! When answering questions, please do not use punctuation or special characters. Click OK to continue.");

var firstName = prompt("What is your first name?");

var animal = prompt("What's your favorite animal?");
                    
var action = prompt("If you were chased by a dinosaur, would you run or hide?");

var place = prompt("If you could live in any country, where would it be?");

document.write(firstName + " decided to " + action + " away. " + firstName + " now lives in " + place + " with his or her pet " + animal + ".");