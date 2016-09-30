var FirstNamespace;
(function (FirstNamespace) {
    function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
    var Greeter = (function () {
        function Greeter(firstName, lastName) {
            this.firstName = firstName,
                this.lastName = lastName;
        }
        Greeter.prototype.greet = function () {
            console.log("Hello " + this.firstName + " " + this.lastName);
        };
        return Greeter;
    }());
    FirstNamespace.Greeter = Greeter;
})(FirstNamespace || (FirstNamespace = {}));
var SecondNamespace;
(function (SecondNamespace) {
    function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
})(SecondNamespace || (SecondNamespace = {}));
var hi = new FirstNamespace.Greeter("Craig", "Rufener");
hi.greet();
