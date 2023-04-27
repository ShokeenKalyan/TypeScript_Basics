
// When we use TS, we make sure that array contain only one consitent type of values in it- [number, number, number] and not [number, boolean, string]

const carMakers = ['ford', 'toyota', 'chevy'] // Type inference of 'string[]'
const carMakers2: string[] = [] // Type annotation of 'string[]'

// Whenever we have to initiliaza a array as blank, we will be using type annotation

const dates = [new Date(), new Date()]; // Type inferred as 'Date[]'

// Typing in 2D arrays
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
] // Type inferred as 'string[][]'

const carsByMake2: string[][] = []; // Type annotation with 'string[][]'


// Benefits of using TS with arrays
// 1) Help with inference when extracting values
const car = carMakers[0]; // Type inferenced as string
const myCar = carMakers.pop() // Type inferred as 'string | undefined'

// 2) TS can prevent us from adding incompatible values to array
// carMakers.push(100) // TS throws error- Argument of type 'number' is not assignable to parameyer of type 'string'

// 3) We can get help with 'map', 'forEach', 'reduce' functions
// Help with 'map'
carMakers.map((car: string): string => {
    return `This is a ${car.toLocaleUpperCase()}` // String methods are available because of typing car as a  string
});

// 4) Flexible - Arrays can contain multiple different types
const importantDates = [new Date(), '23-Feb-2023']; // Type inferred as (string | Date)[]
const importantDates2: (Date | string)[] = [new Date(), '23-Feb-2023']; // Type annotated as (string | Date)[]
importantDates.push(new Date()); // Valid
importantDates.push('2-Apr-2023'); // Valid
// importantDates.push(200); // Invalid // Cannot push argument of number to a parameter of type 'string | Date'

// We will be using typed arrays any time we need to represent a collection of records with some arbitary sort order


