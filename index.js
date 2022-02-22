//Creador de objetos
function capturar(){
    function Persona(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
   nombreCapturar = document.getElementById('nombre').value;
   apellidoCapturar = document.getElementById('apellido').value;
   nuevoUsuario = new Persona(nombreCapturar,apellidoCapturar);
   agregar();
}

//base de datos de usuarios

var baseDatos = [];

//Funcion cada vez que se ejecute el boton
function agregar(){
    baseDatos.push(nuevoUsuario);
    localStorage.setItem("lista",JSON.stringify(baseDatos))
    document.getElementById('tabla').innerHTML += '<tbody><td>'+nuevoUsuario.nombre+'</td><td>'+nuevoUsuario.apellido+'</td></tbody>';
}

//llamada de usuarios mediante API

var randomUser = document.querySelector('#random')
function traer(){
  
   fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data =>{ 
    randomUser.innerHTML = `
    <div>
    <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle pt-0 pb-2">
    <p><strong>Nombre:</strong> ${data.results['0'].name.first} ${data.results['0'].name.last}</p>
    <p><strong>Cuidad:</strong> ${data.results['0'].location.city}</p>
    </div>
  `         
 
})
}


//Eventos de ecuaciones con Jquery

//Calculo de IVA

$("#sumar").click(function(){
    let n1=parseFloat(document.getElementById('n1').value);
    let s=n1*0.19;
    respuesta.innerHTML=`El IVA presente en su monto es ${s}`;
    $('#respuesta').fadeIn(500);
    
});

//Cuotas mas IVA

$("#sumar2").click(function(){
    let n2=parseFloat(document.getElementById('n2').value);
    let c=(n2*0.19)+n2;
    respuesta2.innerHTML=`Su monto con iva incluido es de ${c}`;
    $('#respuesta2').fadeIn(500);
});

//Monto en cuotas con IVA

$("#sumar3").click(function(){
    let n3=parseFloat(document.getElementById('n3').value);
    let n4=parseFloat(document.getElementById('n4').value);
    let d=((n3*0.19)+n3)/n4;
    respuesta3.innerHTML=`Su monto con iva incluido es de ${d}`;
    $('#respuesta3').fadeIn(500);
});


//localstorage

lst = JSON.parse(localStorage.getItem('lista'))
lst.forEach(element => {
   let elements = document.getElementById('elements')
   let div = document.createElement("div")
   div.innerHTML = element.nombre + " "+ element.apellido
   elements.appendChild(div)

})




