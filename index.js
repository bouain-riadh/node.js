
const process = require('process');
const fs = require('fs');
console.log(process.argv)

fs.readFile(process.argv[2], function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
    })