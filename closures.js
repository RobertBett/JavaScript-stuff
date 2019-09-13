const getDataCallback = (callback)=>{
    setTimeout(() => {
    console.log('HEllo')
}, 2000);}


getDataCallback((err,data ) =>{
    if(err){

    }else{
        console.log(data)
    }
})


// PROMISE
const myPromise =  new Promise (() =>{
    setTimeout(() => {
        console.log('PROMISEEE')
    }, 2000)
}) 