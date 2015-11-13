alert("hi");

//write a function to determine if a given variable is a string or not

var userInput = prompt("Write something.");

if (userInput === userInput.toString()) {
  alert("It's a string");

} else {
  alert("It's not a string");

}

//write a function that tells you which of two inputs is smaller

var firstInput = prompt("Input a first number.");
var secondInput = prompt("Input a second number.");

if (firstInput > secondInput) {
  alert("Your second number is smaller.");
}
else {

  if (firstInput < secondInput) {
    alert("Your first number is smaller.");
  }
  else {
    if (firstInput = secondInput) {
      alert("Your inputs match.");
    }
  }
}

//Write a function that concatenates n number of strings together

var firstName = prompt("What is your first name?");
var lastName = prompt("what is your second name?");
var fullName = firstName + " " + lastName;



alert("Hello" + " " + fullName);
