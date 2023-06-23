
// alert("ok");
// console.log("hola");

//let valores = [1,4,5,true,"Hola",66];

//alert(arr[0])

// valores.forEach((dato, index) => {
//     console.log(dato);
// });

let persona = {
    nombre: "Pedro",
    edad: 30,
    estudio: true,
    saluda: function(){
        alert("Hola soy Pedro");
    }
}

let valor = 'edad';

//alert(persona.nombre);
//alert(persona[valor]);

//persona.saluda();

let alumnos = [{nombre: "Juan", edad: 17},{nombre: "Maria", edad: 18},{nombre: "Pedro", edad: 25},{nombre: "Pedro", edad: 40}];

//alert(alumnos[1].nombre)

// let nn = "Juan";
// alumnos.forEach((dato, index) => {
//     //console.log(dato.nombre);
//     if(dato.nombre == nn){
//         alert(dato.edad);
//     }
// });


// function suma(a,b){
//     alert(a+b);
// }

// let suma = (a,b)=>{
//     alert(a+b);
// }

// let suma = (a,b)=>{
//     return a+b;
// }

//let suma = c => c+26;


let suma = (a,b) => a+b;

let resultado = suma(20,90);


//alert(resultado);



// let padre = document.getElementById('padre');
// let hijo = document.getElementById('hijo');
let box = document.getElementById('box');


// padre.addEventListener("click", ()=>{
//     alert("Soy padre");
// });

// hijo.addEventListener("click", ()=>{
//     alert("Soy hijo");
// })

// box.addEventListener("click", (e)=>{
//     let x = e.target;
//     alert(x.dataset.nombre);
// })

box.addEventListener("click", (e)=>{
    let x = e.target;
    alert(x.innerHTML);
})

let btn = document.getElementById("btn");
let color = document.getElementById("color");
let texto = document.getElementById("texto");


let txt = "Hola Mundo Lindo";
let tt = "dadaddda agagagga aggagagag"
btn.addEventListener("click", (e)=>{
    // texto.innerHTML = "<h1>Hola Mundo</h1>";
    //texto.innerHTML = "<h1>" + txt + "</h1>";
    texto.innerHTML = `
    <h1>${txt}</h1>
    <h2>OK OK </h2>
    <p>${tt}</p>    
    
    `;
});

color.addEventListener("click", (e)=>{
    texto.style.background = "#ccc";
    texto.classList.toggle("color_azul");

});

//el.style.cssText = "background-color: #222; color: #fff;";