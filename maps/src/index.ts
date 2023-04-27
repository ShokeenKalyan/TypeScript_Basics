// By convention, we do not use export statements with 'default' keyword, since it can get very confusing
// So, we make use of normal curly braces to exactly import what is needed

// Since Google Maps is installed as a global dependency via script src tag in index.html, we need to install types for it
/// <reference types="@types/google.maps" /> // To avoid TS error - Cannot find name 'google'.ts(2304)
// Read more here - https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

// Classes can be used to create an instance of that class(User,Company) or refer to as a type

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const customMap = new CustomMap('map');

// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);

customMap.addMarker(user);
customMap.addMarker(company);
// Here, TS will implicitly check user and company and their types. It sees that since they have relevant location property defined on them, 
// it will accept them of type 'Mappable'


