const data ={
    get location () {
       return this._location
    },

    set location(value){
        this._location = value.split('a')
    },

    get trip () {
        return this._
    }
}

console.log(data.location)
data.location = 'hawaaii'
console.log(data)