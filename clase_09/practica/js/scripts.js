let visor = document.getElementById("visor");
let teclado = document.getElementById("teclado");
let resultado = document.getElementById("resultado");

let color = "";
teclado.addEventListener("click", (e) => {
    let tt = e.target.dataset.valor;
   color += tt;
   visor.innerHTML = color;
   if(color.length == 6){
    resultado.style.background = `#${color}`;
    color = "";
   }
})
