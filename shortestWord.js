let string = ("this is the string of words and alphabetized characters")
let stringSplit = string.split(" ");
let stringLengths = [];
for (i=0;i<stringSplit.length;i++) {
	stringLengths.push(stringSplit[i].length)
}
let sortedString = stringLengths.sort((a,b) => a - b);
let shortestLength = (sortedString[0]);
console.log('The shortest word is ' + shortestLength + ' character(s) long');
