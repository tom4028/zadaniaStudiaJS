const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

tablica.splice(tablica.length-1,1);
function arrPatern(arr){
    let newArr = [];
    let count = 0;
    for(let i =0;i<arr.length;i+=2){
        count++;
        if(count%3 ==0){
            newArr.push(arr[i]+arr[i]);
            i--;
        }else{
        newArr.push(arr[i]+arr[i+1]);
        }
    }
     return newArr;
};
console.log(arrPatern(tablica));