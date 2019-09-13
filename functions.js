let convertTempFtoC = (fahrenheit) =>{
    let celsius = (fahrenheit - 32) * 5/9

    return celsius
}

console.log(convertTempFtoC(33))


const gradeCalc = (score,numQuestions) =>{
    const percentage = (score / numQuestions) * 100 
    let grade;
     if(percentage >= 90 && percentage < 100){
        grade= 'A'
    }else if(percentage >= 80 && percentage < 89){
        grade= 'B'
    }else if(percentage >= 70 && percentage < 89){
        grade= 'C'
    }else if(percentage >= 60 && percentage < 79){
        grade= 'D'
    }else if(percentage >= 0 && percentage < 59){
        grade= 'F'
    }

    return `you got a ${grade} ${percentage}%`
}

console.log(gradeCalc(Math.floor(Math.random() * 10), 10))



// OBJECT METHODS 

let restaurant ={
    name: 'Guapos',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(){
        return this.guestCapacity - this.guestCount
    },
    seatParty: function(partySize){
        if(partySize <= (this.guestCapacity - this.guestCount)){
            this.guestCount = this.guestCount + partySize
            this.guestCapacity = this.guestCapacity - partySize
        }
    }
}
restaurant.seatParty((Math.floor(Math.random() * 10), 10))
console.log(restaurant.guestCount, restaurant.guestCapacity)
console.log(restaurant.checkAvailability())


// Math OBJECT
console.log(Math.round(1.4))
console.log(Math.ceil(1.3))
console.log(Math.floor(1.9233))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max-min + 1)) + min;

console.log(randomNum)


const guessNum = (guess) => {
    let min = 0
    let max = 100
    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min;

    return randomNum === guess ? `You got it the number is ${randomNum}` : `try again 😀 `

}

const loop = ()=>{
    for ( var i = 0 ; i <= 2; i++){
            console.log(guessNum(Math.floor(Math.random() * (max-min + 1)) + min))
            i++
    }
}

loop()

const notes =[
    {
        title: 'Boston',
        body: 'finna be lit!!'
    },
    {
        title: 'Tropical Island',
        body: 'fina be warm'
    },
    {
        title:'New york',
        body: 'fina be cityish'
    }
]

const findNote = (notes, notesTitle) =>( notes.find((note) => (note.title === notesTitle)))
const index = (notes, notesTitle) =>( notes.findIndex((note) => (note.title === notesTitle)))

const newNote ={
    title: 'Hawaii',
    body:'Ohana'
}
notes.splice(index(notes, 'Tropical Island'),1,newNote)
console.log(notes)
// console.log(findNote() , 'CECFWWE')





console.log(index)