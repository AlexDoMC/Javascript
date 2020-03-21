let string = "`120-=lol';mk=`!@#``";
let lowercase = string.toLowerCase();
let split = lowercase.split("");
let letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
  '3', '4', '5', '6', '7', '8', '9'
];
let preput = [];
for (i = 0; i < split.length; i++) {
  if (letters.indexOf(split[i]) != -1) {
    preput.push(split[i])
  }
}
let output = preput.length;
console.log(output);