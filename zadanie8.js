const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function randomTab(arr,attempt){
    let arrTemp = [];
    for(let i =0;i<attempt;i++){
        let randomNumber = Math.floor(Math.random()*arr.length);
        //console.log(randomNumber);
        arrTemp.push(arr[randomNumber]);
    }
    console.log(arrTemp);
    return Math.min(...arrTemp);
}
console.log(randomTab(tablica,4));