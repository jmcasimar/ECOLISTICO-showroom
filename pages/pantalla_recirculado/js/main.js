// botones de acción
const $botonRellendado = $('#rellenado');
const $botonCirculado = $('#circulado');
const $botonSalida = $('#salida');

// contenedores de sprites
const $recirculado = $('#recirculado');

const pathParte1 = './img/AnimParte1/';
const pathParte2 = './img/AnimParte2/';
const pathParte3 = './img/AnimParte3/';

const framesParte1 = 165;
const framesParte2 = 210;
const framesParte3 = 132;

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
       $recirculado.attr('src', pathParte1 + `AnimParte1_${frameNumberParte1}.png`);
       
       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte1 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte1 >= framesParte1) {
           $recirculado.attr('src', pathParte1 + `AnimParte1_${frameNumberParte1}.png`);
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
       $recirculado.attr('src', pathParte2 + `AnimParte2_${frameNumberParte2}.png`);
       
       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte2 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte2 >= framesParte2) {
           $recirculado.attr('src', pathParte2 + `AnimParte2_${frameNumberParte2}.png`);
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
       $recirculado.attr('src', pathParte3 + `AnimParte3_${frameNumberParte3}.png`);
       
       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateParte3 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberParte3 >= framesParte3) {
           $recirculado.attr('src', pathParte3 + `AnimParte3_${frameNumberParte3}.png`);
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
        $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathParte1}AnimParte1_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesParte2 + 1; i++) {
        $('body').append(`<div id="preload-image-${00 + i}" style="background-image: url('${pathParte2}AnimParte2_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesParte3 + 1; i++) {
        $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathParte3}AnimParte3_${i}.png');"></div>`);
    }
});

/*
Cuando hayan cargado todas las imágenes empezaremos las animaciones o podremos activarlas por medio de los botones correspondientes
*/
$(window).on('load', () => {

    $botonRellendado.on('click', () => {
        console.log('Rellenado de Tanques Centrales');
        frameNumberParte1 = 1;
        requestAnimationFrame(animacionParte1);
    });

    $botonCirculado.on('click', () => {
        console.log('Circulado de Liquidos');
        frameNumberParte2 = 1;
        requestAnimationFrame(animacionParte2);
    });

    $botonSalida.on('click', () => {
        console.log('Salida de Liquidos');
        frameNumberParte3 = 1;
        requestAnimationFrame(animacionParte3);
    });

});