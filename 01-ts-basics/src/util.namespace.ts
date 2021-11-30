 /// <reference path="./constants.namespace.ts" />

namespace Util {
  export namespace Vehicle {
    export function getName() {
      return `${Constants.Vname}`;
    }
  }

  export namespace Animal {
    const name: string = "Tiger";
    export function getName() {
      return `${name}`;
    }
  }
}

console.log(Util.Vehicle.getName());

console.log(Util.Animal.getName());
