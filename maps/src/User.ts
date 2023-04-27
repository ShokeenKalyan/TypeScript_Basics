// By convention, we give a capital name(User) to the file if we are exporting a class. For rest, we use lower case file names

import { faker } from "@faker-js/faker";
// We can install common JS libraries inside any TS project, but TS won't know the types being used in JS code written inside JS libraries
// So, TS has idea of Type definition files, which are like adaptor b/w TS Code and JS libraries that are being used
// type definition files tells the TS compiler all different functions available inside JS library, what type of argument they take and what type of values they return
// Sometimes, Type definition files are installed automatically when we install a JS library (Eg- Axios library)
// Definitely Typed Naming Scheme - @types/{library name}; Eg- @types/faker


import { Mappable } from "./CustomMap";

// Every user has to satisfy the interface - To help TS to check if User has all properties/methods defined inside 'Mappable'
// This will help us to pin point exact error wheneve we want to add properties/methods to our interface
// This is optional - Just for better error identification
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User name is ${this.name}`
    }
}
