let palabraAlAzar;
let errores = 0; //las veces que se equivoca
let aciertos = 0; //las veces que acierta
const palabras = [
    'BOOTCAMP',
    'DESOXIRRIBONUCLEICO',
    'MANDIOCA',
    'PROGRAMANDO',
    'CALEIDOSCOPIO',
    'TIRIKA',
    'MBEJU',
    'COCIDO',
    'ENCARNACION',
    'GUARANI',
    'CHIPAGUASU',
];

const btn = document.getElementById('iniciar juego');
btn.addEventListener('click', iniciar);

function iniciar(event){
    btn.disabled = true;
    errores = 0;
    aciertos = 0;
    const parrafo = document.getElementById('adivinarPalabra');
    parrafo.innerHTML = '';
    const valorAlAzar = Math.floor(Math.random()*palabras.length);
    palabraAlAzar = palabras[valorAlAzar];
    const cantLetras = palabraAlAzar.length;
    console.log(palabraAlAzar);
    for (let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = false;
    }
    for (let i = 0; i < cantLetras; i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}

const btnLetras = document.querySelectorAll('#letras button')
    for (let i = 0; i < btnLetras.length; i++){
    btnLetras[i].addEventListener('click', clickLetras);
    }
const mensaje = document.getElementById('resultado');

function clickLetras(event){
    const espacio = document.querySelectorAll('#adivinarPalabra span');
    const button = event.target; //cual de las letras llama a la funcion.
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase();
    const palabra = palabraAlAzar.toUpperCase();

    let adivino = false; 
    for (let i = 0; i < palabra.length; i++){
        if (letra == palabra[i] ){
            espacio[i].innerHTML = letra;
            aciertos ++;
            adivino = true;
        }
    }
    if (adivino == false){
            errores ++;
        }
    if(errores == 5){
            mensaje.innerHTML = "OH NO! PERDISTE. La palabra era " + palabraAlAzar+".";
            gameOver();
        }else if (aciertos == palabraAlAzar.length){
            mensaje.innerHTML = "ERES BRILLANTE, ADIVINASTE!"
            gameOver();
        }
    console.log(" La "+ letra + " existe! " + adivino); 
 }

function gameOver (){
    for (let i = 0; i < btnLetras.length; i++){
    btnLetras[i].disabled = true;
    }
    btn.disabled = false;
}
gameOver();