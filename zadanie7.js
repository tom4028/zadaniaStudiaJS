const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function randomElement(arr){
    return arr[Math.floor(Math.random()*(arr.length-1))];
}
console.log(randomElement(tablica));

//lodash
const _ = require("lodash");
function randomElem(arr){
    let number = _.random(0,arr.length-1);
    return arr[number];
}
console.log(randomElem(tablica));