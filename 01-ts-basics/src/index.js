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
        var name = "Tiger";
        function getName() {
            return "" + name;
        }
        Animal.getName = getName;
    })(Animal = Util.Animal || (Util.Animal = {}));
})(Util || (Util = {}));
console.log(Util.Vehicle.getName());
console.log(Util.Animal.getName());
/// <reference path="./util.namespace.ts" />
var LUCKY_NUMBER = Math.round(Math.random() * 100);
// export { LUCKY_NUMBER };
var vehicle = Util.Vehicle;
console.log(vehicle.getName());
// index.html
// - jQuery
// - script A -> jQuery("") / $("")
// - script B
