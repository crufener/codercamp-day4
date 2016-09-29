var Hammer = (function () {
    function Hammer(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    return Hammer;
}());
var Computer = (function () {
    function Computer(name, operatingSystem) {
        this.name = name;
        this.operatingSystem = operatingSystem;
    }
    return Computer;
}());
var Hamster = (function () {
    function Hamster(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hamster;
}());
function printName(product) {
    console.log(product.name);
}
var hammer = new Hammer("hammer", 3);
var laptop = new Computer("HP Envy", "Microsoft Windows");
var hammy = new Hamster("Hammy", 2);
printName(hammer);
printName(laptop);
printName(hammy);
