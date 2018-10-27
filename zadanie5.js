const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function arrPatern(arr){
    let newArr = [];
    newArr.push(arr[0]+arr[1]);
    newArr.push(arr[2]+arr[3]);
    newArr.push(arr[4]+arr[3]);
    return newArr;
};
console.log(arrPatern(tablica));