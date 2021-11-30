/// <reference path="./util.namespace.ts" />

import { Util } from "./util.namespace";

let LUCKY_NUMBER = Math.round(Math.random() * 100);

export { LUCKY_NUMBER };

let vehicle = Util.Vehicle;
console.log(vehicle.getName())


// index.html
// - jQuery
// - script A -> jQuery("") / $("")
// - script B