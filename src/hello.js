var address = require("./address")
var count = require("./count")

console.log("start...");
// address.out = 'hello'
console.log(address)


// address.printAddress();

address()

var event = require("events");

let handle = function handleSomle(msg) {
  console.log("hello world : ", msg);
};


let emitter = new event.EventEmitter();

emitter.on("hello", handle);

setTimeout(() => {
  emitter.emit("hello", "for test");
  // emitter.removeListener("hello", handle);
  console.log(__filename);
  console.log(__dirname);
  // console.trace();
}, 1000);

// console.log(emitter.listenerCount("hello"));

// emitter.emit("hello");



console.log("complete...");