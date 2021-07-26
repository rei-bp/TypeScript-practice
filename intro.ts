// VARIABLES

// const name : type = value
let message: string = 'hihihi'

// message = 5; this will error because 5 is not a string


//NUMBER
const age: number = 29

//BOOLEAN
const isHappy: boolean = true

//NULL and UNDEFINED type
const nothing: null = null
const questionmark: undefined = undefined

//VOID
// this is used to describe functions that do not return a type


// tuple
let couple: [string, string]
couple = ["rei", "jackie"]
couple[0] = 'reirei'

const group: [string, string] = ["billy", "bob"]

// couple[2] = 'random individual'

//enums(enumeration)
enum Size {
    small,
    medium,
    large
}

const orderSize: Size = Size.small


function pickSize(option: Size): string {
    return `You have picked the size ${option}`
}

pickSize(Size.large)


//Unknown -- no idea what the type could be
let userInput: unknown
userInput = "string"

//Any -- allows the type to be anything
const looseTyped: any = "just like normal js"


// FUNCTIONS
// (parameter: type, parameter: type)

function addNums(x: number, y: number): string {
    return String(x + y)
}

addNums(4, 9)

// for functions that do not return, we use the void type

function log(word: string): void {
    console.log(word)
}

log("hellohellohello")


// arrow function syntax
const example = (word: string): string => `here is your word: ${word}`

const otherExample = (word: string): void => {
    console.log(`here is another word - ${word}`)
}

// OBJECTS

const person: {
    name: string,
    age: number,
    favFood: {
        name: string,
        meat: boolean
    }
} = {
    name: 'rei',
    age: 29,
    favFood: {
        name: 'steak',
        meat: true
    }
}

// person.name = 10 -> will receive an error


//when it comes to typing if you want an option key you use the ?
const shirt: {
    size: string,
    style?: string
} = {
    size: 'small'
}

shirt.style = 'tank top'

// ARRAYS
// const name: type[] = []

const nums: number[] = [0, 1, 2, 3, 4, 5]
const instructionalTeam: string[] = ['anna', 'weston', 'nick']

//enums in arrays
const choosenSizes: Size[] = [Size.small, Size.medium]

// UNION
// is a way to accept multiple types

let phoneNumber: string | number

phoneNumber = "555-555-5555"
phoneNumber = 5555555555

//an array that accepts either type
const eitherOrArr: string[] | number[] = ['a', 'b']

const mixedArr: (string | number)[] = [5, 'a']
// name : [string | number]

// == custom types 
type modalState = 'open' | 'close'

type modalComponent = { 
    state: { view: modalState }, 
    props: { color?: string | number } 
}

const modal: modalComponent = {
    state: {
        view: 'open'
    },
    props: {
        color: 'red'
    },
}

function handleModal(state: modalState): void {
    //update state with the state provided
    modal.state.view = state
}

handleModal('open')
handleModal('close')


//INTERFACES - can create an advanced type

interface Person {
    firstName: string,
    lastName: string,
    sayHi( word: string ): string
}

const teri: Person = {
    firstName: "Teri",
    lastName: "London",
    sayHi(word) {
        return `code is magic!`
    }
}

//build on top of person interface
interface NINFan extends Person {
    attendedConcerts: number
}

const superFan: NINFan = {
    firstName: 'Eddie',
    lastName: 'Perez',
    sayHi(word) {
        return 'NIN FOR LIFE'
    },
    attendedConcerts: 9,
}

// CLASSES

class Car {
    make: string
    model: string
    year: number

    constructor (make: string, model: string, year: number) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    display(): void {
        console.log(`${this.make}`)
    }
}


const myCar = new Car('Honda', 'Civic', 1995);
myCar.display();