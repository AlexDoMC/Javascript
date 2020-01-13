const readline = require('readline');
promp = prompt('Whos age would you like to know?');
let prompt = promp.toLowerCase()
let bNames = ['John', 'Alex', 'Billy', 'Zoey', 'Kale']
let ages = [25, 15, 16, 34, 27]
bNames.sort();
ages.sort();
let names = String.prototype.toLowerCase.apply(bNames).split(",");
let index = names.indexOf(prompt)
let printAge = ages[index]
alert(bNames[index] + ' is ' + printAge)
let cNames = none
let outputt = { name:cNames.prompt, age:ages[index] }
for (i = 0; i < names.length; i++) {
  output.push(outputt)
  alert(cNames)
}
