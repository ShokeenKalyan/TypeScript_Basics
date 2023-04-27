
// Interfaces - Creates a new type, decribing the property names and value types of an object - A custome type that is going to be defined

// Syntax - 'name' of property : 'type' of property
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
} // Vehicle here is a variable that represents a type

interface Vehicle2 {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
} 

interface Reportable {
    summary(): string;
} 

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name - ${this.name}`
    } // We can express functions also inside our interface definition
};


// Below type annotation is really long - Hard to read and manage with more properties and functions
const printVehicle = (vehicle: { name: string; year: number, broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Name: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Using Interface as type becomes more easy to read and manage
const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Name: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
};
//printVehicle2(oldCivic); // TS expects oldCivic to be of type Vehicle


const printVehicle3 = (vehicle: Vehicle2): void => {
    console.log(`Name: ${vehicle.summary()}`);
};
//printVehicle3(oldCivic2);

// If we remove other fields from the interface an make it condensed(Vehicle3), it still works
const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary()}`);
};
printSummary(oldCivic2);

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
// Both oldCivic and drink objects have summary property despite having other properties as different, so they both have their type as 'Reportable'
// So printSummary can be called with both objects
printSummary(oldCivic2);
printSummary(drink);
// Interface Reportable is thus a gatekeeper to 'printSummary'
// So, both oldCivic and drink must satisfy the 'Reportable' interface to work with 'printSummary'

// General strategy for reusable code in TS -
// 1) Create functions(printSummary) that accept arguments(item) that are typed with interfaces(Reportable)
// 2) Objects/Classes(oldCivic2, drink) can decide to 'implement' a given interface(Reportable) to work with a function(printSummary)



