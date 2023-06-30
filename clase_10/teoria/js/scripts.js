// setTimeout(function(){
    
// },3000);


// let nint = 0;
// let inter = setInterval(function(){    
//     // codigo
//     nint++;
//     if(nint==10){
//         clearInterval(inter);
//         nint = 0;
//     }
// }, 1000);

let btn1 = document.querySelector("#btn1");


btn1.addEventListener("click", function () {
    setTimeout(function(){
        alert("ok");
    },3000);
})

let nint = 0;
// let inter = setInterval(function(){    
//     // codigo
//     nint++;
//     if(nint==10){
//         clearInterval(inter);
//         nint = 0;
//     }
// }, 1000);

let inter = setInterval(function(){    
    // codigo
    nint++;
    if(nint==11){
        clearInterval(inter);
        nint = 0;
        
    }else{
        console.log(nint);
    }
   
}, 200);