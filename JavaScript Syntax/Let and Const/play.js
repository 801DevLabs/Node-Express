const name = "Max";
let age = 32;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return ('My name is ' + userName + ', age is ' + userAge + ' and the user has bobbies: ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));