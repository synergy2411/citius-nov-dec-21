const LUCKY_NUMBER = Math.round(Math.random() * 100);

const getLuckyNumber = () => LUCKY_NUMBER

function sum(a, b ){
    return a + b;
}

module.exports = {
    sum,
    getLuckyNumber
}