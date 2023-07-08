let btn1 = document.getElementById("btn1");
let articulo = document.getElementById("articulo");

btn1.onclick = () => {
    fetch('articulo1.html')
    .then(res => res.text() )
    .then(el =>{
       articulo.innerHTML = el;   
        
    })
    .catch(err=>{
        console.log(err.message);
    });


}