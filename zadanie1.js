const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function arrSum(arr){
    let sum =0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
};

console.log(arrSum(tablica));

//lodash 
const _ = require("lodash");
let sum = _.sum(tablica);
console.log(sum);