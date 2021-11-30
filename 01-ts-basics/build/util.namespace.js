"use strict";
/// <reference path="./constants.namespace.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const constants_namespace_1 = require("./constants.namespace");
var Util;
(function (Util) {
    let Vehicle;
    (function (Vehicle) {
        function getName() {
            return `${constants_namespace_1.Constants.Vname}`;
        }
        Vehicle.getName = getName;
    })(Vehicle = Util.Vehicle || (Util.Vehicle = {}));
    let Animal;
    (function (Animal) {
        const name = "Cat";
        function getName() {
            return `${name}`;
        }
        Animal.getName = getName;
    })(Animal = Util.Animal || (Util.Animal = {}));
})(Util = exports.Util || (exports.Util = {}));
console.log(Util.Vehicle.getName());
console.log(Util.Animal.getName());
