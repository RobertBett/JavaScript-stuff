// Prototypal Inheritence 
// set up the word instance property as an array of  lower case letters
// set uo another instance property to store guessed letters
// Create a method that gives you the word puzzle back

// No guesses ? 
// GUessed "c", "b", and "t"? -> cat

const Hangman = function (word, guesses){
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(letter => {

        if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        }else{
            puzzle += '*'
        }
    });

    return puzzle
}

const game1 = new Hangman('cat', 1)
const game2 = new Hangman('dog', 1)

console.log(game1.getPuzzle())