"use strict";
// VARIABLES
// const name : type = value
let message = 'hihihi';
// message = 5; this will error because 5 is not a string
//NUMBER
const age = 29;
//BOOLEAN
const isHappy = true;
//NULL and UNDEFINED type
const nothing = null;
const questionmark = undefined;
//VOID
// this is used to describe functions that do not return a type
// tuple
let couple;
couple = ["rei", "jackie"];
couple[0] = 'reirei';
const group = ["billy", "bob"];
// couple[2] = 'random individual'
//enums(enumeration)
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
const orderSize = Size.small;
function pickSize(option) {
    return `You have picked the size ${option}`;
}
pickSize(Size.large);
//Unknown -- no idea what the type could be
let userInput;
userInput = "string";
//Any -- allows the type to be anything
const looseTyped = "just like normal js";
// FUNCTIONS
// (parameter: type, parameter: type)
function addNums(x, y) {
    return String(x + y);
}
addNums(4, 9);
// for functions that do not return, we use the void type
function log(word) {
    console.log(word);
}
log("hellohellohello");
// arrow function syntax
const example = (word) => `here is your word: ${word}`;
const otherExample = (word) => {
    console.log(`here is another word - ${word}`);
};
// OBJECTS
const person = {
    name: 'rei',
    age: 29,
    favFood: {
        name: 'steak',
        meat: true
    }
};
// person.name = 10 -> will receive an error
//when it comes to typing if you want an option key you use the ?
const shirt = {
    size: 'small'
};
shirt.style = 'tank top';
// ARRAYS
// const name: type[] = []
const nums = [0, 1, 2, 3, 4, 5];
const instructionalTeam = ['anna', 'weston', 'nick'];
//enums in arrays
const choosenSizes = [Size.small, Size.medium];
// UNION
// is a way to accept multiple types
let phoneNumber;
phoneNumber = "555-555-5555";
phoneNumber = 5555555555;
//an array that accepts either type
const eitherOrArr = ['a', 'b'];
const mixedArr = [5, 'a'];
const modal = {
    state: {
        view: 'open'
    },
    props: {
        color: 'red'
    },
};
function handleModal(state) {
    //update state with the state provided
    modal.state.view = state;
}
handleModal('open');
handleModal('close');
const teri = {
    firstName: "Teri",
    lastName: "London",
    sayHi(word) {
        return `code is magic!`;
    }
};
const superFan = {
    firstName: 'Eddie',
    lastName: 'Perez',
    sayHi(word) {
        return 'NIN FOR LIFE';
    },
    attendedConcerts: 9,
};
// CLASSES
class Car {
    constructor(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    display() {
        console.log(`${this.make}`);
    }
}
const myCar = new Car('Honda', 'Civic', 1995);
myCar.display();
