
let btn_frase = document.getElementById("btn_frase");
//let resultado = document.getElementById("resultado");
let resultado = document.querySelector("#resultado");
let textos = document.querySelectorAll(".palabra");

btn_frase.addEventListener("click", function() {

    //console.log(textos);
    let tt = "";
    textos.forEach((el) => {
      tt += el.value + " " ;
    });
    resultado.innerHTML = tt;
    
});

let arr = [10, 20, 30, 40, 50];

arr.forEach((el) => {
   console.log(el);
});