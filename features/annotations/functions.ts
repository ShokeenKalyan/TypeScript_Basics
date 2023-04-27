
// Type Annotations for functions
    // Code we add to tell TS what type of arguments a function will receive and what type of values it will return
// Type inference for functions
    // TS tries to figure out what type of value a function will return but it will not try to figure out what type of value the arguments are


// Annotation of 'arguments' & 'function return value'
const add = (a: number, b: number): number => {
    // return 'ahjhjhjhj' // TS throws error since we can return a value of type number only
    return a+b;   
}
// For arguments, we always have to use type annotations and not rely on type inference
// For O/P of the function, Type inference works(Even if we remove annotation(number), TS identifies type of return value) but we won't use it

const subtract = (a: number, b: number) => {
    a-b
} // Here, when we don't return the value, TS infers return value as void

const subtract2 = (a: number, b: number): number => {
    return a-b
} // Here TS analyzes return statement to see if it returns a value of type number and if it is not returning a number value, TS throws error


// Annotations for Anonymous function
function divide(a: number, b: number): number {
    return a/b;
}

const multiply = function(a: number, b: number): number {
    return a*b;
};

// Using 'void' type in a function - A function that is not going to return anything
// But technically, a void function can return null or undefined
const logger = (message: string): void => {
    console.log(message)
};

// Usage of 'never' type - We will never return a value and exit the function early w/o returning a value
// This is a very rare case 
const throwError = (message: string): never => {
    throw new Error(message);
}


// Destructuring with Annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// Normal annotation
const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

// Destructured annotation
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather)