namespace FirstNamespace {
    function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
    export class Greeter {
        firstName: string;
        lastName: string;
        greet() {
            console.log(`Hello ${this.firstName} ${this.lastName}`);
        }
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName,
            this.lastName= lastName
        }
    }
}

namespace SecondNamespace {
    function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
}

var hi = new FirstNamespace.Greeter("Craig", "Rufener");
hi.greet();
