let arrayOfMultiples = [7, 5]
let num = arrayOfMultiples[0]
let length = arrayOfMultiples[1]
console.log('Number: ' + num);
console.log('Length: ' + length);
arrayOfMultiples.pop();
for (i=0; i<length-1; i++) {
  arrayOfMultiples.push(
    arrayOfMultiples[i] + num
  )
}
console.log(arrayOfMultiples);
