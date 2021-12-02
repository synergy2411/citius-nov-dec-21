console.log("File  Module Loaded")

// let LUCKY_NUMBER = Math.round(Math.random() * 100);
let LUCKY_NUMBER = 99;

const getLuckyNumber = () => LUCKY_NUMBER

function sum(a, b ){
    return a + b;
}

const changeLuckyNumber = (num) =>{
    LUCKY_NUMBER = num;
}


module.exports = function(){
    return {
        sum,
        getLuckyNumber,
        changeLuckyNumber
    }
}