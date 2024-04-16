async function wait(time){
     await new Promise(function (resolve, reject) {
        setTimeout(function (){
            resolve('recover')
        }, time)
    })
}

async function doSomething(){
    console.log('doSomething start ... ')
    // wait(3000)
    await wait(3000)
    console.log('doSomething complete ... ')
}


function handle(){
    doSomething()
}

handle()

