// contenedores de información
const $textoTemp = $('#tempText');
const $textoHum = $('#humText');
const $textoCO2 = $('#co2Text');

// contenedores de sprites
const $ventiladores = $('#ventiladores');
const $plantas = $('#plantas');
const $riego = $('#riego');
const $luces = $('#luces');
const $medTemp = $('#medTemp');
const $medHum = $('#medHum');
const $medCO2 = $('#medCO2');

const pathVentiladores = './img/Ventiladores/';
const pathPlantas = './img/PlantasP1/';
const pathRiego = './img/ChorrosAgua/';
const pathLuces = './img/FocosMorados/';
const pathMedTemp = './img/Medidor_Temp/';
const pathMedHum = './img/Medidor_Humedad/';
const pathMedCO2 = './img/Medidor_CO2/';

const framesVentiladores = 120;
const framesPlantas = 435;
const framesRiego = 419;
const framesLuces = 336;
const framesMedTemp10 = 24;
const framesMedTemp15 = 48;
const framesMedTemp20 = 72;
const framesMedTemp25 = 96;
const framesMedTemp30 = 120;
const framesMedHum20 = 24;
const framesMedHum40 = 48;
const framesMedHum60 = 72;
const framesMedHum80 = 96;
const framesMedHum100 = 120;
const framesMedCO2_20 = 24;
const framesMedCO2_40 = 48;
const framesMedCO2_60 = 72;
const framesMedCO2_80 = 96;
const framesMedCO2_100 = 120;

const timePerFrameVentiladores = 42;
const timePerFramePlantas = 42;
const timePerFrameRiego = 42;
const timePerFrameLuces = 42;
const timePerFrameMedidores = 42;

let timeWhenLastUpdateVentiladores;
let timeFromLastUpdateVentiladores;
let frameNumberVentiladores = 1;

let timeWhenLastUpdatePlantas;
let timeFromLastUpdatePlantas;
let frameNumberPlantas = 1;

let timeWhenLastUpdateRiego;
let timeFromLastUpdateRiego;
let frameNumberRiego = 1;

let timeWhenLastUpdateLuces;
let timeFromLastUpdateLuces;
let frameNumberLuces = 1;

let timeWhenLastUpdateMedTemp;
let timeFromLastUpdateMedTemp;
let frameNumberMedTemp = 1;

let timeWhenLastUpdateMedTemp10;
let timeFromLastUpdateMedTemp10;
let frameNumberMedTemp10 = 1;
let timeWhenLastUpdateMedTemp15;
let timeFromLastUpdateMedTemp15;
let frameNumberMedTemp15 = 1;
let timeWhenLastUpdateMedTemp20;
let timeFromLastUpdateMedTemp20;
let frameNumberMedTemp20 = 1;
let timeWhenLastUpdateMedTemp25;
let timeFromLastUpdateMedTemp25;
let frameNumberMedTemp25 = 1;
let timeWhenLastUpdateMedTemp30;
let timeFromLastUpdateMedTemp30;
let frameNumberMedTemp30 = 1;

let timeWhenLastUpdateMedCO2_20;
let timeFromLastUpdateMedCO2_20;
let frameNumberMedCO2_20 = 1;
let timeWhenLastUpdateMedCO2_40;
let timeFromLastUpdateMedCO2_40;
let frameNumberMedCO2_40 = 1;
let timeWhenLastUpdateMedCO2_60;
let timeFromLastUpdateMedCO2_60;
let frameNumberMedCO2_60 = 1;
let timeWhenLastUpdateMedCO2_80;
let timeFromLastUpdateMedCO2_80;
let frameNumberMedCO2_80 = 1;
let timeWhenLastUpdateMedCO2_100;
let timeFromLastUpdateMedCO2_100;
let frameNumberMedCO2_100 = 1;

let timeWhenLastUpdateMedHum20;
let timeFromLastUpdateMedHum20;
let frameNumberMedHum20 = 1;
let timeWhenLastUpdateMedHum40;
let timeFromLastUpdateMedHum40;
let frameNumberMedHum40 = 1;
let timeWhenLastUpdateMedHum60;
let timeFromLastUpdateMedHum60;
let frameNumberMedHum60 = 1;
let timeWhenLastUpdateMedHum80;
let timeFromLastUpdateMedHum80;
let frameNumberMedHum80 = 1;
let timeWhenLastUpdateMedHum100;
let timeFromLastUpdateMedHum100;
let frameNumberMedHum100 = 1;

/* ANIMACION DE PLANTAS */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionPlantas(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdatePlantas) timeWhenLastUpdatePlantas = startTime;
   timeFromLastUpdatePlantas = startTime - timeWhenLastUpdatePlantas;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdatePlantas > timePerFramePlantas) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $plantas.attr('src', pathPlantas + `PlantitasP1_${frameNumberPlantas}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdatePlantas = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberPlantas >= framesPlantas) {
           $plantas.attr('src', pathPlantas + `PlantitasP1_${frameNumberPlantas}.png`);
           return;
       } else if (frameNumberPlantas >= framesPlantas/3) {
         requestAnimationFrame(animacionVentiladores);
         requestAnimationFrame(animacionRiego);
         frameNumberPlantas = frameNumberPlantas + 1;
       } else {
           frameNumberPlantas = frameNumberPlantas + 1;
       }
   }
   requestAnimationFrame(animacionPlantas);
}

/* ANIMACION VENTILADORES */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionVentiladores(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateVentiladores) timeWhenLastUpdateVentiladores = startTime;
   timeFromLastUpdateVentiladores = startTime - timeWhenLastUpdateVentiladores;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateVentiladores > timePerFrameVentiladores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $ventiladores.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateVentiladores = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberVentiladores >= framesVentiladores) {
           frameNumberVentiladores = 13;
           //$ventiladores.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
           //return;
       } else {
           frameNumberVentiladores = frameNumberVentiladores + 1;
       }
   }
   requestAnimationFrame(animacionVentiladores);
}

/* ANIMACION LUCES */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionLuces(startTime){
    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
   timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateLuces > timePerFrameLuces) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $luces.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateLuces = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberLuces >= framesLuces) {
           $luces.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
           return;
       } else {
           frameNumberLuces = frameNumberLuces + 1;
       }
   }
   requestAnimationFrame(animacionLuces);
}

/* ANIMACION RIEGO */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionRiego(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateRiego) timeWhenLastUpdateRiego = startTime;
   timeFromLastUpdateRiego = startTime - timeWhenLastUpdateRiego;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateRiego > timePerFrameRiego) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $riego.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateRiego = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberRiego >= framesRiego) {
           $riego.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
           return;
       } else {
           frameNumberRiego = frameNumberRiego + 1;
       }
   }
   requestAnimationFrame(animacionRiego);
}

/* ANIMACION Medidor CO2 20% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionCO2_20(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedCO2_20) timeWhenLastUpdateMedCO2_20 = startTime;
   timeFromLastUpdateMedCO2_20 = startTime - timeWhenLastUpdateMedCO2_20;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedCO2_20 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_20}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedCO2_20 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedCO2_20 >= framesMedCO2_20) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2_20}.png`);
           return;
       } else {
           frameNumberMedCO2_20 = frameNumberMedCO2_20 + 1;
       }
   }
   requestAnimationFrame(animacionCO2_20);
}

/* ANIMACION Medidor CO2 40% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionCO2_40(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedCO2_40) timeWhenLastUpdateMedCO2_40 = startTime;
   timeFromLastUpdateMedCO2_40 = startTime - timeWhenLastUpdateMedCO2_40;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedCO2_40 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_40}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedCO2_40 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedCO2_40 >= framesMedCO2_40) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2_40}.png`);
           return;
       } else {
           frameNumberMedCO2_40 = frameNumberMedCO2_40 + 1;
       }
   }
   requestAnimationFrame(animacionCO2_40);
}

/* ANIMACION Medidor CO2 60% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionCO2_60(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedCO2_60) timeWhenLastUpdateMedCO2_60 = startTime;
   timeFromLastUpdateMedCO2_60 = startTime - timeWhenLastUpdateMedCO2_60;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedCO2_60 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_60}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedCO2_60 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedCO2_60 >= framesMedCO2_60) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2_60}.png`);
           return;
       } else {
           frameNumberMedCO2_60 = frameNumberMedCO2_60 + 1;
       }
   }
   requestAnimationFrame(animacionCO2_60);
}

/* ANIMACION Medidor CO2 80% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionCO2_80(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedCO2_80) timeWhenLastUpdateMedCO2_80 = startTime;
   timeFromLastUpdateMedCO2_80 = startTime - timeWhenLastUpdateMedCO2_80;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedCO2_80 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_80}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedCO2_80 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedCO2_80 >= framesMedCO2_80) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2_80}.png`);
           return;
       } else {
           frameNumberMedCO2_80 = frameNumberMedCO2_80 + 1;
       }
   }
   requestAnimationFrame(animacionCO2_80);
}

/* ANIMACION Medidor CO2 100% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionCO2_100(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedCO2_100) timeWhenLastUpdateMedCO2_100 = startTime;
   timeFromLastUpdateMedCO2_100 = startTime - timeWhenLastUpdateMedCO2_100;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedCO2_100 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_100}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedCO2_100 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedCO2_100 >= framesMedCO2_100) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2_100}.png`);
           return;
       } else {
           frameNumberMedCO2_100 = frameNumberMedCO2_100 + 1;
       }
   }
   requestAnimationFrame(animacionCO2_100);
}

/* ANIMACION Medidor Humedad 20% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionHumedad20(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedHum20) timeWhenLastUpdateMedHum20 = startTime;
   timeFromLastUpdateMedHum20 = startTime - timeWhenLastUpdateMedHum20;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedHum20 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum20}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedHum20 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedHum20 >= framesMedHum20) {
           $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum20}.png`);
           return;
       } else {
           frameNumberMedHum20 = frameNumberMedHum20 + 1;
       }
   }
   requestAnimationFrame(animacionHumedad20);
}

/* ANIMACION Medidor Humedad 40% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionHumedad40(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedHum40) timeWhenLastUpdateMedHum40 = startTime;
   timeFromLastUpdateMedHum40 = startTime - timeWhenLastUpdateMedHum40;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedHum40 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum40}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedHum40 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedHum40 >= framesMedHum40) {
           $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum40}.png`);
           return;
       } else {
           frameNumberMedHum40 = frameNumberMedHum40 + 1;
       }
   }
   requestAnimationFrame(animacionHumedad40);
}

/* ANIMACION Medidor Humedad 60% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionHumedad60(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedHum60) timeWhenLastUpdateMedHum60 = startTime;
   timeFromLastUpdateMedHum60 = startTime - timeWhenLastUpdateMedHum60;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedHum60 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum60}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedHum60 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedHum60 >= framesMedHum60) {
           $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum60}.png`);
           return;
       } else {
           frameNumberMedHum60 = frameNumberMedHum60 + 1;
       }
   }
   requestAnimationFrame(animacionHumedad60);
}

/* ANIMACION Medidor Humedad 80% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionHumedad80(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedHum80) timeWhenLastUpdateMedHum80 = startTime;
   timeFromLastUpdateMedHum80 = startTime - timeWhenLastUpdateMedHum80;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedHum80 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum80}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedHum80 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedHum80 >= framesMedHum80) {
           $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum80}.png`);
           return;
       } else {
           frameNumberMedHum80 = frameNumberMedHum80 + 1;
       }
   }
   requestAnimationFrame(animacionHumedad80);
}

/* ANIMACION Medidor Humedad 100% */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionHumedad100(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedHum100) timeWhenLastUpdateMedHum100 = startTime;
   timeFromLastUpdateMedHum100 = startTime - timeWhenLastUpdateMedHum100;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedHum100 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum100}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedHum100 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedHum100 >= framesMedHum20) {
           $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum100}.png`);
           return;
       } else {
           frameNumberMedHum100 = frameNumberMedHum100 + 1;
       }
   }
   requestAnimationFrame(animacionHumedad100);
}

/* ANIMACION Medidor Temperatura 10 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionTemperatura10(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedTemp10) timeWhenLastUpdateMedTemp10 = startTime;
   timeFromLastUpdateMedTemp10 = startTime - timeWhenLastUpdateMedTemp10;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedTemp10 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp10}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedTemp10 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedTemp10 >= framesMedTemp10) {
           $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp10}.png`);
           return;
       } else {
           frameNumberMedTemp10 = frameNumberMedTemp10 + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura10);
}

/* ANIMACION Medidor Temperatura 15 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionTemperatura15(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedTemp15) timeWhenLastUpdateMedTemp15 = startTime;
   timeFromLastUpdateMedTemp15 = startTime - timeWhenLastUpdateMedTemp15;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedTemp15 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp15}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedTemp15 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedTemp15 >= framesMedTemp15) {
           $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp15}.png`);
           return;
       } else {
           frameNumberMedTemp15 = frameNumberMedTemp15 + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura15);
}

/* ANIMACION Medidor Temperatura 20 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionTemperatura20(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedTemp20) timeWhenLastUpdateMedTemp20 = startTime;
   timeFromLastUpdateMedTemp20 = startTime - timeWhenLastUpdateMedTemp20;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedTemp20 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp20}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedTemp20 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedTemp20 >= framesMedTemp20) {
           $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp20}.png`);
           return;
       } else {
           frameNumberMedTemp20 = frameNumberMedTemp20 + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura20);
}

/* ANIMACION Medidor Temperatura 25 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionTemperatura25(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedTemp25) timeWhenLastUpdateMedTemp25 = startTime;
   timeFromLastUpdateMedTemp25 = startTime - timeWhenLastUpdateMedTemp25;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedTemp25 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp25}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedTemp25 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedTemp25 >= framesMedTemp25) {
           $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp25}.png`);
           return;
       } else {
           frameNumberMedTemp25 = frameNumberMedTemp25 + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura25);
}

/* ANIMACION Medidor Temperatura 30 */
/*
La función 'frameByFrame' será llamada cuando se accione un botón o cuando cargue la seccion para dar entrada a las animaciones, usaremos 'requestAnimationFrame' de jQuery para mantener una animación suave
*/
function animacionTemperatura30(startTime){
    /*
    Empezaremos reseteando el tiempo en caso de no ser la primera vez que se lanza la animación
    */

    /*
    'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame
    */
   if (!timeWhenLastUpdateMedTemp30) timeWhenLastUpdateMedTemp30 = startTime;
   timeFromLastUpdateMedTemp30 = startTime - timeWhenLastUpdateMedTemp30;

   /*
   Después revisamos si ya pasó el tiempo necesario para cambiar de frame
   */
   if (timeFromLastUpdateMedTemp30 > timePerFrameMedidores) {
       /*
       Si ha pasado el tiempo suficiente actualizamos el frame
       */
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp30}.png`);

       /*
       Regresamos el tiempo transcurrido al inicio
       */
       timeWhenLastUpdateMedTemp30 = startTime;

       /*
       Incrementamos el frame o forzamos un reseteo si es el último frame
       */
       if (frameNumberMedTemp30 >= framesMedTemp30) {
           $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp30}.png`);
           return;
       } else {
           frameNumberMedTemp30 = frameNumberMedTemp30 + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura30);
}

/*
Para poder hacer un loop de imágenes necesitamos precargar las imágenes que vamos a usar, para esto forzamos al navegador a cargar cada imagen creando elementos 'fantasma'
*/
$(document).ready(() => {
    for (var i = 1; i < framesPlantas + 1; i++) {
        $('body').append(`<div id="preload-image-${i}" style="background-image: url('${pathPlantas}PlantitasP1_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesVentiladores + 1; i++) {
        $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathVentiladores}Ventiladores_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesLuces + 1; i++) {
        $('body').append(`<div id="preload-image-${00 + i}" style="background-image: url('${pathLuces}FocosMorados_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesRiego + 1; i++) {
        $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathRiego}ChorrosAgua_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesMedCO2_100 + 1; i++) {
        $('body').append(`<div id="preload-image-${0000 + i}" style="background-image: url('${pathMedCO2}Medidor_CO2_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesMedTemp30 + 1; i++) {
        $('body').append(`<div id="preload-image-${00000 + i}" style="background-image: url('${pathMedTemp}Medidor_Temp_${i}.png');"></div>`);
    }

    for (var i = 1; i < framesMedHum100 + 1; i++) {
        $('body').append(`<div id="preload-image-${000000 + i}" style="background-image: url('${pathMedHum}Medidor_Humedad_${i}.png');"></div>`);
    }
});

/*
Cuando hayan cargado todas las imágenes empezaremos las animaciones o podremos activarlas por medio de los botones correspondientes
*/
$(window).on('load', () => {

    $botonVentiladores.on('click', () => {
        console.log('Ventilación');
        frameNumberVentiladores = 1;
        requestAnimationFrame(animacionVentiladores);
    });

    $botonLuces.on('click', () => {
        console.log('Luces');
        frameNumberLuces = 1;
        requestAnimationFrame(animacionLuces);
    });

    $botonLucesOff.on('click', () => {
        $luces.attr('src', pathLuces + `FocosMorados_0.png`);
    });

    $botonRiego.on('click', () => {
        console.log('Riego');
        frameNumberRiego = 1;
        requestAnimationFrame(animacionRiego);
    });

    $botonPlantas.on('click', () => {
        console.log('Entrada de Plantas');
        frameNumberPlantas = 1;
        requestAnimationFrame(animacionPlantas);
    });

    $botonMedCO2_20.on('click', () => {
        console.log('CO2 al 20%');
        $textoCO2.innerHTML = '20%';
        frameNumberMedCO2_20 = 1;
        requestAnimationFrame(animacionCO2_20);
    });

    $botonMedCO2_40.on('click', () => {
        console.log('CO2 al 40%');
        $textoCO2.innerHTML = '40%';
        frameNumberMedCO2_40 = 1;
        requestAnimationFrame(animacionCO2_40);
    });

    $botonMedCO2_60.on('click', () => {
        console.log('CO2 al 60%');
        $textoCO2.innerHTML = '60%';
        frameNumberMedCO2_60 = 1;
        requestAnimationFrame(animacionCO2_60);
    });

    $botonMedCO2_80.on('click', () => {
        console.log('CO2 al 80%');
        $textoCO2.innerHTML = '80%';
        frameNumberMedCO2_80 = 1;
        requestAnimationFrame(animacionCO2_80);
    });

    $botonMedCO2_100.on('click', () => {
        console.log('CO2 al 100%');
        $textoCO2.innerHTML = '100%';
        frameNumberMedCO2_100 = 1;
        requestAnimationFrame(animacionCO2_100);
    });

    $botonMedHum20.on('click', () => {
        console.log('Humedad al 20%');
        $textoHum.innerHTML = '20%';
        frameNumberMedHum20 = 1;
        requestAnimationFrame(animacionHumedad20);
    });

    $botonMedHum40.on('click', () => {
        console.log('Humedad al 40%');
        $textoHum.innerHTML = '40%';
        frameNumberMedHum40 = 1;
        requestAnimationFrame(animacionHumedad40);
    });

    $botonMedHum60.on('click', () => {
        console.log('Humedad al 60%');
        $textoHum.innerHTML = '60%';
        frameNumberMedHum60 = 1;
        requestAnimationFrame(animacionHumedad60);
    });

    $botonMedHum80.on('click', () => {
        console.log('Humedad al 80%');
        $textoHum.innerHTML = '80%';
        frameNumberMedHum80 = 1;
        requestAnimationFrame(animacionHumedad80);
    });

    $botonMedHum100.on('click', () => {
        console.log('Humedad al 100%');
        $textoHum.innerHTML = '100%';
        frameNumberMedHum100 = 1;
        requestAnimationFrame(animacionHumedad100);
    });

    $botonMedTemp10.on('click', () => {
        console.log('10ºC de Temperatura');
        $textoTemp.innerHTML = '10ºC';
        frameNumberMedTemp10 = 1;
        requestAnimationFrame(animacionTemperatura10);
    });

    $botonMedTemp15.on('click', () => {
        console.log('15ºC de Temperatura');
        $textoTemp.innerHTML = '15ºC';
        frameNumberMedTemp15 = 1;
        requestAnimationFrame(animacionTemperatura15);
    });

    $botonMedTemp20.on('click', () => {
        console.log('20ºC de Temperatura');
        $textoTemp.innerHTML = '20ºC';
        frameNumberMedTemp20 = 1;
        requestAnimationFrame(animacionTemperatura20);
    });

    $botonMedTemp25.on('click', () => {
        console.log('25ºC de Temperatura');
        $textoTemp.innerHTML = '25ºC';
        frameNumberMedTemp25 = 1;
        requestAnimationFrame(animacionTemperatura25);
    });

    $botonMedTemp30.on('click', () => {
        console.log('30ºC de Temperatura');
        $textoTemp.innerHTML = '30ºC';
        frameNumberMedTemp30 = 1;
        requestAnimationFrame(animacionTemperatura30);
    });

});

requestAnimationFrame(animacionPlantas);
requestAnimationFrame(animacionLuces);
