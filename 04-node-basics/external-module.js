const axios = require("axios").default;
const chalk = require("chalk");
const yargs = require("yargs");
const https = require("https");
const fetch = require("node-fetch");

const forecastApiURL = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233`

fetch(forecastApiURL).then(console.log).catch(console.log)


// axios
//   .get(forecastApiURL,{
//     httpAgent: new https.Agent({
//       rejectUnauthorized: false,
//     }),
//   })
//   .then((response) => {
//       console.log(response.data)
//   }).catch(err => console.log("ERROR : ", err));


  
// const myModule = require("./utils/file-module");
// const utils = require("./utils");

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1", {
//     httpAgent: new https.Agent({
//       rejectUnauthorized: false,
//     }),
//   } )
//   .then((resp) => console.log(chalk.red("The Response")))
//   .catch((err) => console.log(err));

// console.log("ADD : ", myModule.sum(2, 4));
// console.log("My Lucky Number : ", myModule.getLuckyNumber());
// console.log(utils.getMyFortune());

// console.log("PROCESS : ", process.argv[2])
// console.log("YARGS : ", yargs.argv.body)

const coreModule = require("./core-module");
const utils = require("./utils/file-module");
const utilObj = utils();

console.log("External Module Loaded");
console.log("Lucky Number : ", utilObj.getLuckyNumber());
