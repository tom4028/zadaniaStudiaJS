function działania(a,b){
    return {
        resultAdd:a+b,
        resultSubtr:a-b,
        resultMultiply:a*b,
        resultDivide:function(a,b){
            if(b==0){
                return "Nie dzielimy przez 0";
            }else{
                return a/b;
            }
        }
    }
};
let matma = new działania(1,2);
console.log(matma.resultAdd);
console.log(matma.resultSubtr);
console.log(matma.resultMultiply);
console.log(matma.resultDivide(1,0));