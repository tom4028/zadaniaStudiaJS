const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function firstAndLast(arr){
    let sumFL = arr[0]+arr[arr.length-1];
    return sumFL;
};
console.log(firstAndLast(tablica));

//lodash
const _ = require("lodash");
function FL(arr){
    return _.first(arr)+_.last(arr);
};
console.log(FL(tablica));
