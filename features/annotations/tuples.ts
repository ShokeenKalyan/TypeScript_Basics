// Tuple- An array like structure where each element represents some property of a record- It contains multiple properties to describe one single thing
// Eg- A object representing a 'drink' may have propertirs like color(brown), carbonated(true), sugar(40)
// Array representation - ['brown', 'true', 40]. But we lost information of the object's labels (color, carbonated, sugar). 
// So ordering of elements inside tuple is critical. We have a fixed order/series of elements inside a tuple

// Object of drink - Easy to read and understand
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Tuple of drink
const drink2 = ['brown', true, 40]; // Type inferred as (string | number | boolean)[]
drink2[0] = 40;
drink2[2] = 'brown' // This breaks down our data model inside of tuple since order is broken

// To avoid this, we add a special looking type to it istead of (string | number | boolean)[]
const drink3: [string, boolean, number] = ['brown', true, 40]; // This is what makes it a tuple by fixing the order of types inside the array
// drink3[0] = 40; // Throws error
// drink3[2]= 'brown'; // Throws error

// To avoid repetedly typing variables with same type, we can use type aliases
type Drink = [string, boolean, number]; // This creates the idea of a tuple inside of our application
const drink4: Drink = ['brown', true, 40];
const drink5: Drink = ['green', false, 20];
const drink6: Drink = ['gray', true, 90];


const carSpecs: [number, number] = [400, 3554]; // It does not become clear what these values represents. We only thet there are 2 values and that these are of type number
// Writing similar data in a object
const carStats = {
    horsePower: 400,
    weight: 3554
}; // This data model is more clear in terms of what it represents compared to tuple used earlier

// So in general, anytime we want to model a record, we are going to JS convention of using objects as oppose to a tuple
