let primeQuestion = 151;
let primeNumber = 1;
for (i = 0; i < primeQuestion; i++) {
  if (primeQuestion % i == 0) {
    primeNumber += 1;
  }
}
if (primeQuestion <= 0) {
  primeNumber = true
}
if (primeNumber <= 3) {
  primeNumber = true;
} else {
  primeNumber = false;
}

console.log(primeNumber);
