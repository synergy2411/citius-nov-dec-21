"use strict";
/// <reference path="./constants.namespace.ts" />
var Util;
(function (Util) {
    let Vehicle;
    (function (Vehicle) {
        function getName() {
            return `${Constants.Vname}`;
        }
        Vehicle.getName = getName;
    })(Vehicle = Util.Vehicle || (Util.Vehicle = {}));
    let Animal;
    (function (Animal) {
        const name = "Tiger";
        function getName() {
            return `${name}`;
        }
        Animal.getName = getName;
    })(Animal = Util.Animal || (Util.Animal = {}));
})(Util || (Util = {}));
console.log(Util.Vehicle.getName());
console.log(Util.Animal.getName());
