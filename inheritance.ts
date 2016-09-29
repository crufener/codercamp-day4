abstract class Vehicle {

    public report() {
        console.log(`Year: ${this.year}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
    }

    constructor(public year: number, public make: string, public model: string) { }
}

class Car extends Vehicle {
    constructor(year: number, make: string, model: string) {
        super(year, make, model);
    }
}

class Truck extends Vehicle {
    public report() {
        super.report();
        console.log(`Towing Capacity: ${this.towingCapacity}`);
    }

    constructor(year: number, make: string, model: string, public towingCapacity:number) {
        super(year, make, model);
    }
}

// create a car
let myCar = new Car(2015, 'Toyota', 'Camry');
myCar.report();

// create a truck
let myTruck = new Truck(2016, 'Dodge', 'Ram', 5000);
myTruck.report();

/*ask for help with this one*/
class Hamburger {
    public getPrice() {
        return this.price;
    }
    constructor(public name: string, public price: number){
        this.name = "Hamburger"
    }
}
class Cheeseburger extends Hamburger {
    public getPrice() {
        return super.getPrice() + 1

    }
    constructor( name: string,  price: number){
        super(name,price);
        this.name = "Cheeseburger"
    }
}
let hb = new Hamburger("what",1.50)
let hbc = new Cheeseburger("k",88)
console.log(hb.getPrice());
console.log(hbc.getPrice());
