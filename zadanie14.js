const os = require("os");
let objects = [{
    id:1,
    show:function(){
        console.log(os.cpus());
    }
},{
    id:2
},{
    id:3,
    show:function(){
        console.log(os.type());
    }
}];

function showObject(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].hasOwnProperty('show')){
            arr[i].show();
        }else{
        console.log("Error: Ten object nie ma funkcji show");
        }
    }
};
showObject(objects);