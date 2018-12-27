var name = "Max";
var age = 32;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return ('My name is ' + userName + ', age is ' + userAge + ' and the user has bobbies: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));