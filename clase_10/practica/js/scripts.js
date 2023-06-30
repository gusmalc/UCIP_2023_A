let pelota = document.getElementById("pelota");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let iniciar = document.getElementById("iniciar");

b1.addEventListener("mousedown", () => {})
let inter;
let py = 0;
let px = 0;

b1.onmousedown = ()=>{
    inter = setInterval(function(){          
        mover(-5,0);
    }, 10);
}
b1.onmouseup = ()=>{
    clearInterval(inter);
}

b2.onmousedown = ()=>{
    inter = setInterval(function(){          
        mover(0,-5);
    }, 10);
}
b2.onmouseup = ()=>{
    clearInterval(inter);
}
b3.onmousedown = ()=>{
    inter = setInterval(function(){          
        mover(0,5);
    }, 10);
}
b3.onmouseup = ()=>{
    clearInterval(inter);
}
b4.onmousedown = ()=>{
    inter = setInterval(function(){          
        mover(5,0);
    }, 10);
}
b4.onmouseup = ()=>{
    clearInterval(inter);
}



let mover = (x,y)=>{
    px += x;  
    py += y;
    pelota.style.transform = `translateY(${py}px) translateX(${px}px)`;
}


iniciar.onclick = ()=>{
    px = 0;  
    py = 0;
    pelota.style.transform = `translateY(${py}px) translateX(${px}px)`;
}
