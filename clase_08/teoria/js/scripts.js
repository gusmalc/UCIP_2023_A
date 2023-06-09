const a = 10;
let b = 20;

let arr = [10, "hola", false, 0];

//console.log(arr[1]);

let persona = {
    nombre: "Juan",
    apellido: "Blanco",
    saluda: function(){
        alert("Hola");
    }
}

//persona.saluda();

console.log(persona.apellido);


function func(x, y){
    alert(x);
    alert(y);
}


//func('Hola Mundo', 'Que lindo todo');


let app = document.getElementById("app");

//alert(app.id);

//app.addEventListener("click", func);

function suma(a,b){
    return a+b;
}

// let xx = suma(10,10);

// function agregar(a){
//     a--;
//     alert(a);
// }

// agregar(5);

// function yy(a){
//     let x = 5;
//     x += a;
//     alert(x);
// }

// yy(4);

// let w = 30;
// let z = 10;

// let u = 3;
// let p = 5;

// if(w > z && u > p){
//     alert("Es mayor");
// }else{
//     alert("Es menor");
// }

// let n = 'aa';
// let m = 'bb';

// if(n != m){
//     alert("");
// }

let nn = 1;
let mm = "1";

if(nn === mm){
    alert("es igual");
}