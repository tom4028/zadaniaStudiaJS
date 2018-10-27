const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function arrReverse(arr){
    let arrR = arr.reverse();
    return arrR;
};
console.log(arrReverse(tablica));

//lodash
const _ = require('lodash');
let aRev = _.reverse(tablica);
console.log(aRev);