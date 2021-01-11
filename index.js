// Code your solutions in this file
const arrayOfNames = ["Alex", "Mai", "Zach"];
const eventName = "surprise";

function writeCards(arrayOfNames, event) {
  let newArr = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    newArr.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArr;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}