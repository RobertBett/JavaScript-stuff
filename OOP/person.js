const people = [
    {
        firstName: 'Robert',
        lastName: 'Bett',
        age:'23',
        jobs:['Genius','Playboy','billionare', 'Philanthropist']
    },
    {
        firstName: 'James',
        lastName: 'Bond',
        age:'40?',
        jobs:['Playboy']
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        age:'50-60?',
        jobs:['Genius','Playboy','billionare', 'Philanthropist']
    },

]

class PersonClass{
    constructor(firstName, lastName, age){
        this.firstName =firstName
        this.lastName =lastName
        this.age =age
    }

    getBio (){
        return `${this.firstName} is ${this.age}`
    }

    setName (){
        //  const name = fullName.split(' ')
        //  const[firstName, lastName] = name
         return `name is ${this.lastName}... ${this.firstName},${this.lastName}`
    }
    

}

class Employee extends PersonClass{
    constructor(firstName, lastName, age, jobs){
        super(firstName, lastName, age)
        this.jobs = jobs
    }
    getJobs(){
        return this.jobs.map((job)=> `${job}`)
    }
}

people.forEach((person)=>{
    const me  = new Employee(person.firstName, person.lastName, person.age, person.jobs );
    // console.log(me)
    // console.log(me.setName())
    // console.log(me.getBio())
    console.log(me.getJobs())
})

// const Person = function (firstName, lastName, age){
//     this.firstName =firstName
//     this.lastName =lastName
//     this.age =age
// };


// Person.prototype.getBio = function () {
//     return `${this.firstName} is ${this.age}`
// }

// Person.prototype.location = 'Hawaii'

// Person.prototype.setName = function (){
//     //  const name = fullName.split(' ')
//     //  const[firstName, lastName] = name
//      return `name is ${this.lastName}... ${this.firstName},${this.lastName}`
// }




