abstract class Vehicle {
    constructor(public make: string, public cost: number, public isAvailable: boolean) {}
}

class Car extends Vehicle {
    constructor(
        make: string,
        cost: number,
        isAvailable: boolean,
        public color: string
    ) {
        super(make, cost, isAvailable);
        this.color = color;
    }
    printStuff() {
        console.log(`
            Make: ${this.make}
            Cost: ${this.cost}
            Available: ${this.isAvailable}
            Color: ${this.color}
            `)
    }
}

class Boat extends Vehicle {
    constructor(
        make: string,
        cost: number,
        isAvailable: boolean,
        public color: string
    ) {
        super(make, cost, isAvailable);
        this.color = color;
    }
    printStuff() {
        console.log(`
            Make: ${this.make}
            Cost: ${this.cost}
            Available: ${this.isAvailable}
            Color: ${this.color}
            `)
    }
}

class Truck extends Vehicle {
    constructor(
        make: string,
        cost: number,
        isAvailable: boolean,
        public color: string
    ) {
        super(make, cost, isAvailable);
        this.color = color;
    }
    printStuff() {
        console.log(`
            Make: ${this.make}
            Cost: ${this.cost}
            Available: ${this.isAvailable}
            Color: ${this.color}
            `)
    }
}

class Motorcycle extends Vehicle {
    constructor(
        make: string,
        cost: number,
        isAvailable: boolean,
        public wheels: string
    ) {
        super(make, cost, isAvailable);
        this.wheels = wheels;
    }
    printStuff() {
        console.log(`
            Make: ${this.make}
            Cost: ${this.cost}
            Available: ${this.isAvailable}
            Wheels: ${this.wheels}
            `)
    }
}

let van = new Car("Ford", 20000, false, "green");
let boat = new Boat("WaterSpeed", 10000, true, "red");
let harley = new Motorcycle("Harley", 9000, true, 2);
let truck = new Truck("Ford", 60000, true, "white");

van.printStuff();
