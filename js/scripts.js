console.log('funciona');
const he = document.querySelectorAll("a ");
he[1].textContent = 'buenas';
console.log(he);


//generar un nuveo enlace
const neuevoEnlace = document.createElement('A');

//agregar href
neuevoEnlace.href = 'nuevo-enlace.html';
//agragar text
neuevoEnlace.textContent = 'un nuevo en enlace';
//agregar clase
neuevoEnlace.classList.add('navegcion__enlace');
//agregarlo al documento
const navegacion = document.querySelector('.navegacion') ;
navegacion.appendChild(neuevoEnlace);

//console.log(neuevoEnlace);
console.log(navegacion);
/*
//eventos
console.log('1');

window.addEventListener('load',function(){   //load espera  a que el JS  y los archivos que dependen del HTML esten listos

    console.log('2');
})

console.log('3');

window.onscroll = function(){
    console.log("scroling");
    
}
*/
//seleccionar elmentos y asociarles un evento

/*const btnEnviar = document.querySelector(".boton--primario");

btnEnviar.addEventListener('click',function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formualrio...');
});*/




const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
//evento en los iputs y txtarea
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerDatos); 
email.addEventListener('input',leerDatos); 
mensaje.addEventListener('input',leerDatos); 
//el evento de submit
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //validar el formulario
    const{nombre,email,mensaje } = datos;
    
    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta('todos los campos son olbigatorios',true);
        return;
    }
    mostrarAlerta('enhorabuena se enviaron los datos correctamente');
    
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    //enviar el formulario

});

function leerDatos(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');

    }
    formulario.appendChild(alerta);
     //desaparezca despues de 5 segundos
     setTimeout(() => {
        alerta.remove();
    }, 3000);

}


