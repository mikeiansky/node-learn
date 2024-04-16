const p =
    new Promise(function (resolve, reject) {
        setTimeout(function (){
            resolve('one')
        }, 2000)
    }).then(function (result) {
        console.log('second receive', result)
        return new Promise(function (resolve, reject) {
            resolve('inner second')
        })
    }).then(function (result) {
        console.log('third receive', result)
    })



