document.addEventListener('DOMContentLoaded', function(){
    Eventos();
});

const ValorTicket = 200;

function Eventos(){
    const BotonBorrar = document.querySelector('#boton_borrar');
    const BotonResumen = document.querySelector('#boton_resumen');

    BotonBorrar.addEventListener('click', Borrar);
    BotonResumen.addEventListener('click', Resumen);
}

function Borrar(){
    const nombre = document.querySelector('#ticket_nombre');
    const apellido = document.querySelector('#ticket_apellido');
    const email = document.querySelector('#ticket_email');
    const cantidad = document.querySelector('#ticket_cantidad');
    const categoria = document.querySelector('#ticket_categoria');
    const total = document.querySelector('#ticket_precio');

    nombre.classList.remove("invalido");
    apellido.classList.remove("invalido");
    email.classList.remove("invalido");
    cantidad.classList.remove("invalido");

    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = 0;
    categoria.value = 0;
    total.innerHTML="";
}

function Resumen(){
    const nombre = document.querySelector('#ticket_nombre');
    const apellido = document.querySelector('#ticket_apellido');
    const email = document.querySelector('#ticket_email');
    const cantidad = document.querySelector('#ticket_cantidad');
    const descuento = document.querySelector('#ticket_categoria');
    const total = document.querySelector('#ticket_precio');

    if( ControlDatos(nombre,apellido,email,cantidad,descuento) ){
        total.innerHTML = ValorTicket * (100 - descuento.value) / 100 * cantidad.value;
        total.value = ValorTicket * (100 - descuento.value) / 100 * cantidad.value;
    }else{
        total.innerHTML = "";
    }
}

function ControlDatos(nombre,apellido,email,cantidad,categoria){
    nombre.classList.remove("invalido");
    apellido.classList.remove("invalido");
    email.classList.remove("invalido");
    cantidad.classList.remove("invalido");
    categoria.classList.remove("invalido");

    let control = 1;
    if(nombre.value===""){
        nombre.classList.add("invalido");
        control = 0;
    }
    if(apellido.value===""){
        apellido.classList.add("invalido");
        control = 0;
    }
    if(email.value===""){
        email.classList.add("invalido");
        control = 0;
    }
    const emailValido = email =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if(!emailValido(email.value)){
        email.classList.add("invalido");
        control = 0;
    }
    if(cantidad.value === 0 || cantidad.value === ""){
        cantidad.classList.add("invalido");
        control = 0;
    }
    if(categoria.value === "0"){
        categoria.classList.add("invalido");
        control = 0;
    }

    return control;
}