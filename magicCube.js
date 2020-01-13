// 2d Array
let magicCube = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]
// Defining Magic Number
let int = 15
// Defining the Cube
let a = magicCube[0][0]
let b = magicCube[0][1]
let c = magicCube[0][2]
let d = magicCube[1][0]
let e = magicCube[1][1]
let f = magicCube[1][2]
let g = magicCube[2][0]
let h = magicCube[2][1]
let i = magicCube[2][2]
// Variable Outputs
let top = a + b + c
let middle = d + e + f
let bottom = g + h + i
let left = a + d + g
let midCol = b + e + h
let right = c + f + i
let bltr = g + e + c
let tlbr = a + e + i
// Not Magic Message Variable
let notMagic = function() {
  console.log('This cube is not Magic!');
}
// Output Checker
if (top != int) {
  notMagic();
  return;
}
if (middle != int) {
  notMagic();
  return;
}
if (bottom != int) {
  notMagic();
  return;
}
if (left != int) {
  notMagic();
  return;
}
if (midCol != int) {
  notMagic();
  return;
}
if (right != int) {
  notMagic();
  return;
}
if (bltr != int) {
  notMagic();
  return;
}
if (tlbr != int) {
  notMagic();
  return;
}
// If no  issues arise this runs to signify it is Magic
console.log('This cube is Magic!')
