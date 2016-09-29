var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.report = function () {
        console.log("Year: " + this.year);
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(year, make, model) {
        _super.call(this, year, make, model);
    }
    return Car;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(year, make, model, towingCapacity) {
        _super.call(this, year, make, model);
        this.towingCapacity = towingCapacity;
    }
    Truck.prototype.report = function () {
        _super.prototype.report.call(this);
        console.log("Towing Capacity: " + this.towingCapacity);
    };
    return Truck;
}(Vehicle));
var myCar = new Car(2015, 'Toyota', 'Camry');
myCar.report();
var myTruck = new Truck(2016, 'Dodge', 'Ram', 5000);
myTruck.report();
var Hamburger = (function () {
    function Hamburger(name, price) {
        this.name = name;
        this.price = price;
        this.name = "Hamburger";
    }
    Hamburger.prototype.getPrice = function () {
        return this.price;
    };
    return Hamburger;
}());
var Cheeseburger = (function (_super) {
    __extends(Cheeseburger, _super);
    function Cheeseburger(name, price) {
        _super.call(this, name, price);
        this.name = "Cheeseburger";
    }
    Cheeseburger.prototype.getPrice = function () {
        return _super.prototype.getPrice.call(this) + 1;
    };
    return Cheeseburger;
}(Hamburger));
var hb = new Hamburger("what", 1.50);
var hbc = new Cheeseburger("k", 88);
console.log(hb.getPrice());
console.log(hbc.getPrice());
