const tablica = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];

function factorial(n){
    let f = 1;
    let i =1;
    while(i<=n){
        f = f*i;
        i++;
    }
    return f;
}
console.log(factorial(7));