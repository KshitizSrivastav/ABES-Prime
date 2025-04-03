const {sum} = require('./team2.js');
// const s1 = sum(34);
// const res = sum(12,3);
// const ans = sum(3,77,65);
// console.log(s1);
// console.log(res);
// console.log(ans);
const profit = 1000;
const expenses = 2000;
const revenue = sum(profit, expenses);

module.exports = {
    profit,
    expenses,
    revenue
};
