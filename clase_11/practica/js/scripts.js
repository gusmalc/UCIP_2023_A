(function() {

let btn1 = document.getElementById("btn1");
let respuesta = document.getElementById("respuesta");


btn1.onclick = ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json() )
    .then(el =>{
        crea_tabla(el);
        
    })
    .catch(err=>{
        console.log(err.message);
    });
};

let crea_tabla = (lu)=>{


let tabla = `

<table class='table table-dark table-striped'>
<thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
        </tr>
    </thead>
    <tbody>
`;

lu.forEach(u => {
    let x = `
    <tr onclick="ficha(${u.id})">
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
    </tr>
    `;
    tabla += x;
});

tabla += "</tbody></table>";
 
respuesta.innerHTML = tabla;
}





})();

let ficha = (id)=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res => res.json() )
    .then(el =>{
        crea_ficha(el);
        
    })
    .catch(err=>{
        console.log(err.message);
    });
}

let crea_ficha = (datos)=>{

    let f = `
    <h1>${datos.name}</h1>
    <p>${datos.email}</p>
    <p>${datos.company.name}</p>
    
    `
    respuesta.innerHTML = f;

}