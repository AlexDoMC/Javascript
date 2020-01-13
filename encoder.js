// XXX: Starting String
let starting = 'This is a string of letters.';
// XXX: Case Insensitive
let string = starting.toLowerCase();
// XXX: isLetter Check Array
let letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// XXX: String -> Array
let split = string.split("");
// XXX: Defining Pre Output
let preput = [];
// XXX: Checks if split[i] is a letter and if so push it to preput
for (i = 0; i < split.length; i++) {
  if (letters.indexOf(split[i]) != -1) {
    preput.push(letters.indexOf(split[i]) + 1)
  }
}
// XXX: preput String -> Array
let output = preput.join(" ");
// XXX: Final Output
console.log(output);
