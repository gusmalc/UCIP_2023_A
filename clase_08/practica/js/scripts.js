// practica

let btn_sumar = document.getElementById("btn_sumar");
let resultado = document.getElementById("resultado");
let btn_borrar = document.getElementById("btn_borrar");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");



btn_sumar.addEventListener("click",sumar);

function sumar(){
   let a = parseInt(numero1.value);
   let b = parseInt(numero2.value);
   let c = a+b;
   resultado.innerHTML = c;
}


btn_borrar.addEventListener("click", borrar);

function borrar() {
    numero1.value = "0";
    numero2.value = "0";
    resultado.innerHTML = "0";
}

numero1.addEventListener("click",function(){
    numero1.value = "";
})
numero2.addEventListener("click",function(){
    numero2.value = "";
})
