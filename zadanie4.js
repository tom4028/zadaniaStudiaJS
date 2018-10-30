const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

// function arrReverse(arr){
//     let arrR = arr.reverse();
//     return arrR;
// };
//console.log(arrReverse(tablica));

//lodash
//const _ = require('lodash');
//let aRev = _.reverse(tablica);
//console.log(aRev);

//No build function
function reverseArr(arr){
    let arrReverse = [];
    for(let i=arr.length-1;i>=0;i--){
        // let lastElement = arr.pop();
        // console.log(lastElement);
        arrReverse.push(arr.pop());
    }
    return arrReverse;
};
console.log(reverseArr(tablica));