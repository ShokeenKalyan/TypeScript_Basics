const apples: number = 5;
// const apples2: number = true // Throws error

let speed:string = 'fast';
// speed = 70 //Throws error

let hasName: boolean = true;

let nothingMuch: null = null; // Here type and value is same

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']; // Type corresponds to an array of strings
let myNumbers: number[] = [1,2,3] // Type is an array of numbers
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car(); // creating an instance of Car with type Car

// Object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
}; // In typing, we use semi-colons after properties instead of commas

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
} // Type in function details what arguments and their types it is going to accept and what values and their types it is going to return


// If we remove type annotations from variable decalrations, even then TS can infer their types and apply typing rules to it
// Eg, let apples: number = 5 // Shows type as number
// Eg, let apples = 5 // Shows type as number

// Type inference :
// Eg- const color =                 'red';
//  Variable declaration    Variable initialization
// If declaration and initialization are on the same line, TS will figure out the type of 'color' for us i.e. string
// Eg- let apples = 5 // Show type as number
// Eg- let apples; apples = 5; // Shows type as any

// Usage of Type annotations-
// 1) When we declare a variable on one line and then initialize it later
// 2) When we want a variable to have a type that can't be inferred
// 3) When a function returns 'any' type and we need to clarify the value

// Usage of Type inference-
// 1) We generally rely on TS all the time

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{ "x": 10, "y": 20 }';
const coordinates = JSON.parse(json);
console.log(coordinates) // O/P - {x: 10, y:20};
coordinates.hjhjhjhj; // This property does not exist on 'coordinates', still TS won't throw error as the type infered of coordinates is 'any'

// I/P                 function        O/P type
// 'false'            JSON.parse()     boolean
// '4'                JSON.parse()     number
// '{"value": 5}'     JSON.parse()     {value: number}
// '{"val": "axa"}'   JSON.parse()     {value: string}
// So, we can pass diff strings to JSON.parse() and can get back a variety of value types. So, JSON.parse() returns 'any' type 
// as TS cannot predict what would be returned after calling JSON.parse()

// Any Type-
// It is a type, just as 'string' or 'boolean' are
// It means that TS has no idea what type a variable is - It can't check for correct property references
// General idea is to avoid variables with 'any' at all costs as TS cannot check errors inside our Code editor for the concerned variable's value

const json2 = '{ "x": 10, "y": 20 }';
//Fixing type issue - Defining type instead of leaving it to TS which decalres its type as any
const coordinates2: {"x": number, "y": number } = JSON.parse(json);
console.log(coordinates2);
//coordinates2.yuyuyu // Throws error since type is now explicitly defined


// When to use annotations
// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord1; // Warning displayed by TS that this variable has type 'any'
let foundWord2: boolean; // Type declared as boolean
let foundWord3 = false; // Type inferred as boolean

for (let i=0; i<words.length; i++) {
    if (words[i] === 'green') {
        foundWord1 = true;
    }
}

// When to use annotations
// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // the variable can have either a boolean or a number value
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

