Parse.initialize("123456", "...", "...");
Parse.serverURL = 'http://localhost:1337/parse';
//Parse.serverURL = 'http://192.168.1.84:1337/parse';

// System ID
const sysID = "15-113-001";

// contenedores de sprites
const $alimentacionContenedor = $('#alimentacionContenedor');
const $compresor = $('#compresor');
const $entradaA = $('#entradaA');
const $entradaB = $('#entradaB');
const $salidaA = $('#salidaA');
const $salidaB = $('#salidaB');
const $manometroA = $('#manometroA');
const $manometroB = $('#manometroB');
const $nivelA = $('#nivelA');
const $nivelB = $('#nivelB');

const pathCompresor = './img/Compresor/';
const pathEntradaA = './img/LineasAgua/AguaTanqueA/';
const pathEntradaB = './img/LineasAgua/AguaTanqueB/';
const pathSalidaA = './img/LineasAgua/SalidaTanqueA/';
const pathSalidaB = './img/LineasAgua/SalidaTanqueB/';
const pathManometroA = './img/Manometros/ManometroSubeTanqueA/';
const pathManometroB = './img/Manometros/ManometroSubeTanqueB/';
const pathNivelA = './img/Niveles/N_Nutrientes/';
const pathNivelB = './img/Niveles/N_Agua/';

const framesCompresor = 69;
const framesEntradaA = 120;
const framesEntradaB = 120;
const framesSalidaA = 96;
const framesSalidaB = 96;
const framesManometroA = 66;
const framesManometroB = 66;
const framesNivelA = 74;
const framesNivelB = 74;

const timePerFrame = 42;

let timeWhenLastUpdateParte1;
let timeFromLastUpdateParte1;
let frameNumberParte1 = 1;

let timeWhenLastUpdateParte2;
let timeFromLastUpdateParte2;
let frameNumberParte2 = 1;

let timeWhenLastUpdateParte3;
let timeFromLastUpdateParte3;
let frameNumberParte3 = 1;

/* ANIMACION PARTE 1 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionParte1(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateParte1) timeWhenLastUpdateParte1 = startTime;
   timeFromLastUpdateParte1 = startTime - timeWhenLastUpdateParte1;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateParte1 > timePerFrame) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $alimentacionContenedor.attr('src', pathParte1 + `AnimAlimentacionP1_${frameNumberParte1}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte1 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte1 >= framesParte1) {
           $alimentacionContenedor.attr('src', pathParte1 + `AnimAlimentacionP1_${frameNumberParte1}.png`);
           return;
       } else {
           frameNumberParte1 = frameNumberParte1 + 1;
       }
   }
   requestAnimationFrame(animacionParte1);
}

/* ANIMACION PARTE 3 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionParte2(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateParte2) timeWhenLastUpdateParte2 = startTime;
   timeFromLastUpdateParte2 = startTime - timeWhenLastUpdateParte2;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateParte2 > timePerFrame) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $alimentacionContenedor.attr('src', pathParte2 + `AnimAlimentacionP2_${frameNumberParte2}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte2 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte2 >= framesParte2) {
           $alimentacionContenedor.attr('src', pathParte2 + `AnimAlimentacionP2_${frameNumberParte2}.png`);
           return;
       } else {
           frameNumberParte2 = frameNumberParte2 + 1;
       }
   }
   requestAnimationFrame(animacionParte2);
}

/* ANIMACION PARTE 3 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionParte3(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateParte3) timeWhenLastUpdateParte3 = startTime;
   timeFromLastUpdateParte3 = startTime - timeWhenLastUpdateParte3;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateParte3 > timePerFrame) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $alimentacionContenedor.attr('src', pathParte3 + `AnimAlimentacionP3_${frameNumberParte3}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte3 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte3 >= framesParte3) {
           $alimentacionContenedor.attr('src', pathParte3 + `AnimAlimentacionP3_${frameNumberParte3}.png`);
           return;
       } else {
           frameNumberParte3 = frameNumberParte3 + 1;
       }
   }
   requestAnimationFrame(animacionParte3);
}


/*
Para poder hacer un loop de imágenes necesitamos precargar las imágenes que vamos a usar, para esto forzamos al navegador a cargar cada imagen creando elementos 'fantasma'
*/
$(document).ready(() => {
    for (var i = 1; i < framesParte1 + 1; i++) {
        $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathParte1}AnimAlimentacionP1_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesParte2 + 1; i++) {
        $('body').append(`<div id="preload-image-${00 + i}" style="background-image: url('${pathParte2}AnimAlimentacionP2_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesParte3 + 1; i++) {
        $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathParte3}AnimAlimentacionP3_${i}.png');"></div>`);
    }
});

/*
Cuando hayan cargado todas las imágenes empezaremos las animaciones o podremos activarlas por medio de los botones correspondientes
*/
$(window).on('load', () => {

    $botonCirculado.on('click', () => {
        console.log('Circulado de Liquidos');
        frameNumberParte1 = 1;
        requestAnimationFrame(animacionParte1);
    });

    $botonPresurizacion.on('click', () => {
        console.log('Presurización de Liquidos');
        frameNumberParte2 = 1;
        requestAnimationFrame(animacionParte2);
    });

    $botonAlimentacion.on('click', () => {
        console.log('Alimentación de Sistema');
        frameNumberParte3 = 1;
        requestAnimationFrame(animacionParte3);
    });

});
