document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password?"));


  while(confirmLength < 8 || confirmLength > 128) {
      alert("Please select a password length between 8-128 characters.");
      var confirmLength = (prompt("Please note the number of characters that you would like your password to contain."));
      } 

      alert(`Your password will have ${confirmLength} characters`);

    
    var confirmspecialcharacters = confirm("Select OK if you would like to include special characters.");
    var confirmlower = confirm("Select OK if you would like your password to include lowercase letters.");    
    var confirmupper = confirm("Select OK if you would like your password to include uppercase letters.");
    var confirmnumbers = confirm("Select OK if you would like password to include uppercase characters.");
    
      while(confirmupper === false && confirmlower === false && confirmspecialcharacters === false && confirmnumbers === false) {
        alert("Please select at least one of the parameters.");
        var confirmspecialcharacters = confirm("Select OK if you would like your password to include special characters.");
        var confirmlower = confirm("Select OK if you would like your password to include lowercase letters.");    
        var confirmupper = confirm("Select OK if you would like your password to include uppercase letters.");
        var confirmnumbers = confirm("Select OK if you would like your password to include uppercase characters.");
      }

   
      var passwordCharacters = []
      
    if (confirmspecialcharacters) {
      passwordCharacters = passwordCharacters.concat(specialcharacters)
    }

    if (confirmnumbers) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmlower) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmupper) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }

      console.log(passwordCharacters)


      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}