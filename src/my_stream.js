var fs = require('fs')


const rs = fs.createReadStream('hello.js')


rs.on('data', function(data){
    console.log('one data ====> ')
    console.log('rs data', data.toString())
})


const ws = fs.createWriteStream('out.txt')
ws.on('data', function (data){
    console.log('ws data', data)
})
ws.on('finish', function (data) {
    console.log('finish data:', data)
})
rs.pipe(ws)
// ws.write('hello')
// ws.close()

