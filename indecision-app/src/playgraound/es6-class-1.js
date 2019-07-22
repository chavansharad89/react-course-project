
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi i am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        return greeting;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greet = super.getGreeting();

        if(this.hasHomeLocation()) {
            greet += `I am visiting ${this.homeLocation}.`
        }

        return greet;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }
}
const me = new Traveler('Andrew Mead', 26, 'New Jersey');
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());