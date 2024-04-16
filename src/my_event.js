const event = require("events")


const emitter = new event.EventEmitter()

emitter.on("connect", function (client) {
    console.log('connect', client)
})

emitter.on('data', function (data) {
    console.log('data:', data)
})

emitter.on('disconnect', function (msg) {
    console.log('disconnect', msg)
})

emitter.emit('connect', 'ciwei')
emitter.emit('data', 'join')
emitter.emit('data', 'update')
emitter.emit('disconnect', 'change')

console.log('complete ... ')