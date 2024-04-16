
var fs = require('fs')


const data = fs.readFileSync('./hello.js')

// console.log(data.toString())

fs.readFile('hello.js', function (err, data) {
    if (err) {
        return console.error('read file err', err)
    }
    console.log('read file success')
    console.log(data.toString())
})
