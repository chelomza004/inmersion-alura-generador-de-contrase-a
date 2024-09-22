let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonBorrar = document.getElementById('Limpiar');
let message = document.getElementById('mensajeValidacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contrasena.value = password;

    
   validarPassword(password);
}

function limpiarCampos(){
    
    contrasena.value = '';

    
    cantidad.value = '';
    message.textContent = '';  
}

botonBorrar.addEventListener('click', limpiarCampos);


function validarPassword(){
    const password = contrasena.value

    let numero = /\d/;
    let minuscula = /[a-z]/;
    let mayusculas = /[A-Z]/;
    let caracterEspecial = /[!@#$%^&*()]/;

    
    if (!numero.test(password)) {
        message.textContent = "La contraseña es débil: debe contener al menos un número.";
        message.style.color = "red";
    } else if (!minuscula.test(password)) {
        message.textContent = "La contraseña es débil: debe contener al menos una letra minúscula.";
        message.style.color = "red";
    } else if (!mayusculas.test(password)) {
        message.textContent = "La contraseña es débil: debe contener al menos una letra mayúscula.";
        message.style.color = "red";
    } else if (!caracterEspecial.test(password)) {
        message.textContent = "La contraseña es débil: debe contener al menos un carácter especial.";
        message.style.color = "red";
    } else {
        message.textContent = "La contraseña es fuerte.";
        message.style.color = "green";
    }
}










