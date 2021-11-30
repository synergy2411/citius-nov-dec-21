 /// <reference path="./constants.namespace.ts" />

import { Constants } from "./constants.namespace";

export namespace Util {
  export namespace Vehicle {
    export function getName() {
      return `${Constants.Vname}`;
    }
  }

  export namespace Animal {
    const name: string = "Cat";
    export function getName() {
      return `${name}`;
    }
  }
}

console.log(Util.Vehicle.getName());

console.log(Util.Animal.getName());
