// practica

let btn_sumar = document.getElementById("btn_sumar");
let resultado = document.getElementById("resultado");
let btn_borrar = document.getElementById("btn_borrar");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");


//resultado.innerHTML = "<h1>Que facil es todo esto</h1>";

btn_sumar.addEventListener("click", hace_algo);

function hace_algo() {
    let a = parseInt(numero1.value);
    let b = parseInt(numero2.value);
    let c = a+b;
    resultado.innerHTML = c;
}

btn_borrar.addEventListener("click", borrar);

function borrar() {
    resultado.innerHTML = "";
}