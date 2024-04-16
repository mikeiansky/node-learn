var count = require("./count")
function printAddress(){
    console.log("this is my default address");
}

exports.printAddress = printAddress;
exports.tag = "address tag";


// setTimeout(function (){
//     console.log('print @ address $$ ', exports)
// }, 1000)


module.exports = {
    printAddress: printAddress
}

module.exports = printAddress