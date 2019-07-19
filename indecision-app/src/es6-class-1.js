

class Person {
    constructor(name = 'test', age = 0) {
        this.name = name;
        this.age = age;
        console.log(name);
    }

    getGreeting() {

    }

    getDescription() {
        return `${this.name} is ${age} years of old.`
    }
}


const me = new Person('sharad chavan');
console.log(me);