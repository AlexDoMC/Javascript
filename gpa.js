let fs = require('fs')

fs.readFile('grades.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let math = data.toString().split("\r\n")
  var sum = 0;
  for (var i = 0; i < math.length; i++) {
    if (math[i] == '') {
      math.splice(i, 1);
      continue
    }
    sum += parseInt(math[i])
  }
  let average = sum/math.length
  fs.appendFile('grades.txt', `\n Average grade: ${average}`, (err) => {
    if (err) throw err;
  })
})
