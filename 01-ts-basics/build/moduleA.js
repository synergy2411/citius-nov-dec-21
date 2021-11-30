"use strict";
/// <reference path="./util.namespace.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.LUCKY_NUMBER = void 0;
const util_namespace_1 = require("./util.namespace");
let LUCKY_NUMBER = Math.round(Math.random() * 100);
exports.LUCKY_NUMBER = LUCKY_NUMBER;
let vehicle = util_namespace_1.Util.Vehicle;
console.log(vehicle.getName());
// index.html
// - jQuery
// - script A -> jQuery("") / $("")
// - script B
