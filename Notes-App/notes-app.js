// DOM Document Object Model
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
    },
    {
        title:'Hawaii',
        body: 'fina be beautiful'
    }
]

// const h1 = document.querySelector('h1')

notes.forEach((note) => {
    const newHeading = document.createElement('h3')
    const newParagraph = document.createElement('p')
    newHeading.textContent = note.title
    newParagraph.textContent = note.body
    document.querySelector('body').appendChild(newHeading)
    document.querySelector('body').appendChild(newParagraph)
})

document.querySelector('button').addEventListener('click', (e) => {
    console.log(e)
    const h1s = document.querySelectorAll('h1')
    h1s.forEach((h1)=>{
        h1.textContent = e.target.innerText
    })    
})

