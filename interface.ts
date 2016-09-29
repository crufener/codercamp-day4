//Interfaces alwasy have a capital I

interface INamed {
    name: string
}

class Hammer implements INamed {
    constructor(public name: string, public weight: number) {}
}

class Computer implements INamed {
    constructor(public name: string, public operatingSystem: string) {}
}

class Hamster implements INamed {
    constructor(public name: string, public age: number) {}
}

//Also can use it in a function
//'product' is anything that has the INamed interface (name:string)
function printName(product: INamed) {
    console.log(product.name);
}

const hammer = new Hammer("hammer", 3);
const laptop = new Computer("HP Envy", "Microsoft Windows");
const hammy = new Hamster("Hammy", 2);

printName(hammer);
printName(laptop);
printName(hammy);
