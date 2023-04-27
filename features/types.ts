
// In TS, a type is an easy way to refer to different properties and functions that a value has
// Eg- 'red' is a string or alternatively a value that has properties & methods that a string has like concat(), includes(), toLowerCase() etc
// So, types are just shortcuts or labels  and every value in JS has a type

// Type     Values that have this type
// string   'hi there', "", 'Today is Monday'
// number   0.00025, -20, 40000
// boolean  true, false
// Date     new Date()
// ToDo     {id: 1, completed: true, title: 'Something'}

// 2 different categories of types - 
//  1) Primitive types - number, boolean, void, undefined, string, symbol, null
//  2) Objecct types - objects, functions, arrays, classes

// Relevance of types -
// 1) They are used by TS compiler to analyze our code for errors
// 3) Types allow other engineers to understand what values are flowing around our codebase

// Hovering on below variables gives information related to their types
const today = new Date();
today.getMonth();

const person = {
    age: 20
};

class Color {

}
const red = new Color();

// We use types everywhere for each variable
// Whetjer, we want or not, every value defined inside our application is going to have a type

// Type Annotations and Inference
// These 2 features slightly differently to variable declarations, functions and objects

// Type Annotations - Code we add to tell TS what type of value a variable will refer to - We tell the type
// Type inference - TS tries to figure out what type of value a variable refers to - TS guessed the type
