
// Class - 
// A Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'/'object'

class Vehicle {
    drive(): void {
        console.log('dhuk dhuk')
    }

    honk(): void {
        console.log('beep beep')
    }
}

const vehicle = new Vehicle(); // Creating a instance of an class, Now we have access to all different methods defined inside the class
vehicle.drive();
vehicle.honk();

// Car(sub class) should inherit properties and methods of a Vehicle(super class)
// This can be done using extends keyword
// We can also overwrite methods on child class
class Car extends Vehicle {
    drive(): void {
        console.log('ratata ratata')
    }
}

const car = new Car();
car.drive();
car.honk();


// Class Method modifiers
// Modifiers are keyword that can be placed on diferent methods and properties inside of a class
// Goal of modifiers is to restrict access to diff functions/variables
// By default, every method & property that we add to a class is always going to be public
// 3 types -
// 1) public - This method can be called any where, any time
// 2) private - This method can only be called by other methods in the same class definition
// 3) protected - This method can be called by other methods in this class, or by other methods in child classes


// We cannot overwrite a method's modifier from parent to child
class Car2 extends Vehicle {
    // private drive(): void {
    //     console.log('ratata ratata')
    //}
    drive(): void {
        console.log('ratata ratata')
    }


    startDrivingProcess(): void {
        this.drive();
    }
}

const car2 = new Car2();
//car2.drive(); // Throws error since drive mrthod is private and not accessible outside the class
car2.startDrivingProcess()
car2.honk();

// When we add private or protected modifier on a class method, we are not adding any extra layer of application security
// It is just to restrict different methods that other developers can call - So that they don't break something inside the application


class Vehicle2 {
    protected honk(): void {
        console.log('beep beep')
    }
}

class Car3 extends Vehicle2 {
    drive(): void {
        console.log('ratata ratata')
    }


    startDrivingProcess(): void {
        this.drive();
        this.honk(); // To make honk() accessible to Car3 class, we can mark honk() as protected instead of private, so that child class can access it
    }
}


class Vehicle3 {
    //color: string = 'red';
    
    // color: string;
    // constructor(color: string) {
    //     this.color = color
    // }

    constructor(public color: string) {
    } // Making color property accessible to all properties and methods inside the class

}

class Car4 extends Vehicle3 {

}

const vehicle3 = new Vehicle3('orange');
console.log(vehicle3.color);

const car4 = new Car4('red'); // We have to pass a string that will serve as a color as it is inheriting parent's(Vehicle3) constructor

class Car5 extends Vehicle3 {
    constructor(public wheels: number, color: string) {
        super(color); // Calling the constructor of parent class (Vehicle3)
    }
}

const car5 = new Car5(4, 'yellow')
