
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    } 
};

// If we want to use destructuring to create/read a variable, we have to write the expected structure of the property profile, which is on right hand side
const { age, name }: {age: number; name: string} = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
