const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];
function nowaTablica(arr){
    let counter = arr.length-1;
    let newArr = [];
    while(counter>0){
        let number =Math.floor(Math.random()*arr.length-1);
        if(number<=0){
            number = Math.floor(Math.random()*arr.length-1);
        }
        newArr.push(arr.splice(number,1));
        counter--;
    }    
    return newArr;
    
}
console.log(nowaTablica(tablica));