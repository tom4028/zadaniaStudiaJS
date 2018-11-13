const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function addAndSub(arr){
    let sum =0;
    let r = 0;//random choice
    for(let i =0;i<arr.length;i++){
        r = Math.floor(Math.random()*2);
        if(r===0){
            sum+=arr[i];
        }else{
            sum-=arr[i];
        }
        
     }
     return sum;
}

console.log(addAndSub(tablica));