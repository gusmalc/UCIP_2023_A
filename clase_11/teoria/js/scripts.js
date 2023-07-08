
let arr = [1,2,{nombre: "Pedro"}];

// console.log(arr[0]);

// console.log(arr[2].nombre);

let obj = {
    nombre: "Maria",
    arr: [1,2,{nombre: "Pedrito"}]
}

// console.log(obj.nombre);

// console.log(obj.arr[2].nombre);

let dato = "nombre";


//console.log(obj[dato]);

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json() )
.then(el =>{
    console.log(el);
})
.catch(err=>{
    console.log(err.message);
});

// function func(p) {
//     return p * 2;
// }

// let func = (p)=>{
//     return p * 2;
// }

// let func = (p) => p * 2;



//let x = func(10);