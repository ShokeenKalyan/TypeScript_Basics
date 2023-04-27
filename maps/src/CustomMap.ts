// We create a separate Map class so that we can limit access to google map methods inside index.ts file 
// so that other developers cannot play around with another methods and break our code

import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // Solution 1 - To Add Markers for different classes
    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     })
    // }
    
    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
    // Above solution is not generic and a new method would be needed to add Marker for each class
    
    
    // Solution 2 - To Add Markers for different classes
    // addMarker(mappable: User | Company): void {
    //     //By lookin at | (pipe) operator, TS automatically picks only the common properties b/w the 2 types - User and Company
    //     // mappable.location will exist but not mappable.name(User property) and mappable.catchPhrase(Company property)
        
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         }
    //     })
    // }
    // Above solution works fine to make a generic method available to User and Company without needing to add diff methods to this class
    // But, if additiional Classes making use of Markers comes up (like School, CarLot, Park etc), then we would need to add more classes to mappable arguments as types
    // So CustomMap'd dependency class list would increase and increase
    
    
    // Solution 3 - To Add Markers for different classes
    // Adding a custom interface Mappable instead of using Class definitions as all Classes will satisfy Mappable as long as they have location property with lat and lng properties
    // So a single value like user can have multiple types - Both 'User' class type and 'Mappable' interface type
    // addMarker(mappable: Mappable): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         }
    //     })
    // }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
        
    }
    
}