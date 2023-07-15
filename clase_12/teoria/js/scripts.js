let app = document.getElementById("app");
let eliminar = document.getElementById("eliminar");
let agregar = document.getElementById("agregar");
let datos = document.getElementById("datos");

let h1 = document.createElement("h1");


h1.innerHTML = "Hola Mundo";

h1.style.color = "#f00";

//app.appendChild(h1);

eliminar.onclick = () => {
    app.removeChild(h1);
}


agregar.onclick = () => {
    let tr = document.createElement("tr");
    let x = `
    <td>Pedro</td>
    <td>Pedrito</td>
    <td><i class="fa-solid fa-trash" onclick="borrar(this)"></i></td>
    `;
    tr.innerHTML = x;
    datos.appendChild(tr);
}


let borrar = (x)=>{
    //console.log(x.parentNode.parentNode);
    datos.removeChild(x.parentNode.parentNode);
}