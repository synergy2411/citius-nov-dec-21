var Constants;
(function (Constants) {
    Constants.Vname = "Toyota";
})(Constants || (Constants = {}));
/// <reference path="./constants.namespace.ts" />
var Util;
(function (Util) {
    var Vehicle;
    (function (Vehicle) {
        function getName() {
            return "" + Constants.Vname;
        }
        Vehicle.getName = getName;
    })(Vehicle = Util.Vehicle || (Util.Vehicle = {}));
    var Animal;
    (function (Animal) {
        var name = "Cat";
        function getName() {
            return "" + name;
        }
        Animal.getName = getName;
    })(Animal = Util.Animal || (Util.Animal = {}));
})(Util || (Util = {}));
console.log(Util.Vehicle.getName());
console.log(Util.Animal.getName());
