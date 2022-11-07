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

    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = 0;
    categoria.value = "--Seleccione--";
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
    }

    
}

function ControlDatos(nombre,apellido,email,cantidad,descuento){
    if(nombre.value===""){
        nombre.classList.add("invalido");
    }
    return 1;
}