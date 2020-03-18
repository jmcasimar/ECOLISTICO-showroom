Parse.initialize("123456", "...", "...");
//Parse.serverURL = 'http://localhost:1337/parse';
Parse.serverURL = 'http://192.168.1.84:1337/parse';

// System ID
const sysID = "15-113-001";

// contenedores de información
const textTemp = document.querySelector('#tempText');
const textHum = document.querySelector('#humText');
const textCO2 = document.querySelector('#co2Text');

/* Asignación de variables mongoDB-Parse */
var State = Parse.Object.extend("State");
var Config = Parse.Object.extend("Config");
var Screen = Parse.Object.extend("Screens");
let configId = '';
let screenId = '';
var scr = new Screen();

// contenedores de sprites
const $ventiladores_1 = $('#ventiladores_1');
const $plantas_1 = $('#plantas_1');
const $riego_1 = $('#riego_1');
const $luces_1 = $('#luces_1');
const $medTemp_1 = $('#medTemp_1');
const $medHum_1 = $('#medHum_1');
const $medCO2_1 = $('#medCO2_1');
const $Rec1_1 = $('#Rec1_1');
const $Rec2_1 = $('#Rec2_1');
const $Rec3_1 = $('#Rec3_1');
const $Rec4_1 = $('#Rec4_1');
const $Rec5_1 = $('#Rec5_1');
const $Rec6_1 = $('#Rec6_1');
const $Rec7_1 = $('#Rec7_1');
const $Rec8_1 = $('#Rec8_1');

// contenedores de sprites
const $ventiladores_2 = $('#ventiladores_2');
const $plantas_2 = $('#plantas_2');
const $riego_2 = $('#riego_2');
const $luces_2 = $('#luces_2');
const $medTemp_2 = $('#medTemp_2');
const $medHum_2 = $('#medHum_2');
const $medCO2_2 = $('#medCO2_2');
const $Rec1_2 = $('#Rec1_2');
const $Rec2_2 = $('#Rec2_2');
const $Rec3_2 = $('#Rec3_2');
const $Rec4_2 = $('#Rec4_2');
const $Rec5_2 = $('#Rec5_2');
const $Rec6_2 = $('#Rec6_2');
const $Rec7_2 = $('#Rec7_2');
const $Rec8_2 = $('#Rec8_2');

// contenedores de sprites
const $ventiladores_3 = $('#ventiladores_3');
const $plantas_3 = $('#plantas_3');
const $riego_3 = $('#riego_3');
const $luces_3 = $('#luces_3');
const $medTemp_3 = $('#medTemp_3');
const $medHum_3 = $('#medHum_3');
const $medCO2_3 = $('#medCO2_3');
const $Rec1_3 = $('#Rec1_3');
const $Rec2_3 = $('#Rec2_3');
const $Rec3_3 = $('#Rec3_3');
const $Rec4_3 = $('#Rec4_3');
const $Rec5_3 = $('#Rec5_3');
const $Rec6_3 = $('#Rec6_3');
const $Rec7_3 = $('#Rec7_3');
const $Rec8_3 = $('#Rec8_3');

// Path to img
const pathVentiladores = './img/Ventiladores/';
const pathPlantas1 = './img/PlantasP1/';
const pathPlantas2 = './img/PlantasP2/';
const pathPlantas3 = './img/PlantasP3/';
const pathRiego = './img/ChorrosAgua/';
const pathLuces = './img/FocosMorados/';
const pathMedTemp = './img/Medidor_Temp/';
const pathMedHum = './img/Medidor_Humedad/';
const pathMedCO2 = './img/Medidor_CO2/';
const pathRectangulos = './img/Rectangulos/Rectangulo';

// Total Frames
const framesVentiladores = 120;
const framesPlantas = 435;
const framesRiego = 419;
const framesLuces = 336;
const totalFramesMedTemp = 120;
const totalFramesMedHum = 120;
const totalFramesMedCO2 = 120;
const totalFramesRectangulo = 48;

// Animation velocity
const timePerFrameVentiladores = 42;
const timePerFramePlantas = 42;
const timePerFrameRiego = 42;
const timePerFrameLuces = 42;
const timePerFrameMedidores = 42;
const timePerFrameRectangulo = 42;

// Actual Frames
let framesMedTemp = 1;
let framesMedHum = 1;
let framesMedCO2 = 1;
let framesRec1 = 0;
let framesRec2 = 0;
let framesRec3 = 0;
let framesRec4 = 0;
let framesRec5 = 0;
let framesRec6 = 0;
let framesRec7 = 0;
let framesRec8 = 0;
let frameNumberVentiladores = 1;
let frameNumberPlantas = 1;
let frameNumberRiego = 1;
let frameNumberLuces = 1;
let frameNumberMedTemp = 1;
let frameNumberMedHum = 1;
let frameNumberMedCO2 = 1;
let frameNumberRec1 = 0;
let frameNumberRec2 = 0;
let frameNumberRec3 = 0;
let frameNumberRec4 = 0;
let frameNumberRec5 = 0;
let frameNumberRec6 = 0;
let frameNumberRec7 = 0;
let frameNumberRec8 = 0;

// Timers
let timeWhenLastUpdateVentiladores;
let timeFromLastUpdateVentiladores;

let timeWhenLastUpdatePlantas;
let timeFromLastUpdatePlantas;

let timeWhenLastUpdateRiego;
let timeFromLastUpdateRiego;

let timeWhenLastUpdateLuces;
let timeFromLastUpdateLuces;

let timeWhenLastUpdateMedTemp;
let timeFromLastUpdateMedTemp;

let timeWhenLastUpdateMedHum;
let timeFromLastUpdateMedHum;

let timeWhenLastUpdateMedCO2;
let timeFromLastUpdateMedCO2;

let timeWhenLastUpdateRec1;
let timeFromLastUpdateRec1;
let timeWhenLastUpdateRec2;
let timeFromLastUpdateRec2;
let timeWhenLastUpdateRec3;
let timeFromLastUpdateRec3;
let timeWhenLastUpdateRec4;
let timeFromLastUpdateRec4;
let timeWhenLastUpdateRec5;
let timeFromLastUpdateRec5;
let timeWhenLastUpdateRec6;
let timeFromLastUpdateRec6;
let timeWhenLastUpdateRec7;
let timeFromLastUpdateRec7;
let timeWhenLastUpdateRec8;
let timeFromLastUpdateRec8;

// Aux variables
let runVentiladores = true;
let actualTemp = 0;
let actualHum = 0;
let actualCO2 = 0;
let colorRec1 = 'gray';
let colorRec2 = 'gray';
let colorRec3 = 'gray';
let colorRec4 = 'gray';
let colorRec5 = 'gray';
let colorRec6 = 'gray';
let colorRec7 = 'gray';
let colorRec8 = 'gray';

// Initial Container_Frontal
var startSequence = true;

/* ANIMACION DE PLANTAS */
function animacionPlantas(startTime){
    /* 'startTime' es un parametro de 'requestAnimationFrame', podemos considerar que es el tiempo actual, primero se calculará cuanto tiempo ha pasado desde el último cambio de frame */
   if (!timeWhenLastUpdatePlantas) timeWhenLastUpdatePlantas = startTime;
   timeFromLastUpdatePlantas = startTime - timeWhenLastUpdatePlantas;

   /* Después revisamos si ya pasó el tiempo necesario para cambiar de frame */
   if (timeFromLastUpdatePlantas > timePerFramePlantas) {
       /* Si ha pasado el tiempo suficiente actualizamos el frame */
       $plantas_1.attr('src', pathPlantas1 + `PlantitasP1_${frameNumberPlantas}.png`);
       $plantas_2.attr('src', pathPlantas2 + `PlantitasP2_${frameNumberPlantas}.png`);
       $plantas_3.attr('src', pathPlantas3 + `PlantitasP3_${frameNumberPlantas}.png`);
       /* Regresamos el tiempo transcurrido al inicio */
       timeWhenLastUpdatePlantas = startTime;

       /* Incrementamos el frame o forzamos un reseteo si es el último frame */
       if (frameNumberPlantas >= framesPlantas) {
           $plantas_1.attr('src', pathPlantas1 + `PlantitasP1_${frameNumberPlantas}.png`);
           $plantas_2.attr('src', pathPlantas2 + `PlantitasP2_${frameNumberPlantas}.png`);
           $plantas_3.attr('src', pathPlantas3 + `PlantitasP3_${frameNumberPlantas}.png`);
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
function animacionVentiladores(startTime){
  if (runVentiladores) {
    if (!timeWhenLastUpdateVentiladores) timeWhenLastUpdateVentiladores = startTime;
    timeFromLastUpdateVentiladores = startTime - timeWhenLastUpdateVentiladores;

    if (timeFromLastUpdateVentiladores > timePerFrameVentiladores) {
        $ventiladores_1.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
        $ventiladores_2.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
        $ventiladores_3.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
        timeWhenLastUpdateVentiladores = startTime;

        if (frameNumberVentiladores >= framesVentiladores) {
            frameNumberVentiladores = 13;
            $ventiladores_1.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
            $ventiladores_2.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
            $ventiladores_3.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
        } else {
            frameNumberVentiladores = frameNumberVentiladores + 1;
        }
    }
    requestAnimationFrame(animacionVentiladores);
  } else {
    return;
  }
}

/* ANIMACION LUCES */
function animacionLuces(startTime){
   if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
   timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

   if (timeFromLastUpdateLuces > timePerFrameLuces) {
       $luces_1.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
       $luces_2.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
       $luces_3.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces}.png`);
       timeWhenLastUpdateLuces = startTime;

       if (frameNumberLuces >= framesLuces) {
           $luces_1.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
           $luces_2.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
           $luces_3.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces}.png`);
           return;
       } else {
           frameNumberLuces = frameNumberLuces + 1;
       }
   }
   requestAnimationFrame(animacionLuces);
}

/* ANIMACION RIEGO */
function animacionRiego(startTime){
   if (!timeWhenLastUpdateRiego) timeWhenLastUpdateRiego = startTime;
   timeFromLastUpdateRiego = startTime - timeWhenLastUpdateRiego;

   if (timeFromLastUpdateRiego > timePerFrameRiego) {
       $riego_1.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
       $riego_2.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
       $riego_3.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
       timeWhenLastUpdateRiego = startTime;

       if (frameNumberRiego >= framesRiego) {
           $riego_1.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
           $riego_2.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
           $riego_3.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
           return;
       } else {
           frameNumberRiego = frameNumberRiego + 1;
       }
   }
   requestAnimationFrame(animacionRiego);
}


/* ANIMACION TEMP */
function requestTemp(temp) {
  actualTemp = temp;
  let percentage = 2.8571*temp;
  if (percentage < 1) { percentage = 1; }
  else if (percentage > 100) { percentage = 100; }
  framesMedTemp = parseInt(totalFramesMedTemp*percentage/100, 10);
  textTemp.innerHTML = `${temp} ºC`;
  requestAnimationFrame(animacionTemperatura);
}

function animacionTemperatura(startTime){
   if (!timeWhenLastUpdateMedTemp) timeWhenLastUpdateMedTemp = startTime;
   timeFromLastUpdateMedTemp = startTime - timeWhenLastUpdateMedTemp;

   if (timeFromLastUpdateMedTemp > timePerFrameMedidores) {
       $medTemp_1.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp}.png`);
       timeWhenLastUpdateMedTemp = startTime;

       if (frameNumberMedTemp == framesMedTemp) {
         $medTemp_1.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp}.png`);
         return;
       } else if (frameNumberMedTemp > framesMedTemp) {
         frameNumberMedTemp = frameNumberMedTemp - 1;
       } else {
         frameNumberMedTemp = frameNumberMedTemp + 1;
       }
   }
   requestAnimationFrame(animacionTemperatura);
}

/* ANIMACION HUM */
function requestHum(hum) {
  actualHum = hum;
  framesMedHum = parseInt(totalFramesMedHum*hum/100, 10);
  textHum.innerHTML = `${hum} %`;
  requestAnimationFrame(animacionHumedad);
}

function animacionHumedad(startTime){
   if (!timeWhenLastUpdateMedHum) timeWhenLastUpdateMedHum = startTime;
   timeFromLastUpdateMedHum = startTime - timeWhenLastUpdateMedHum;

   if (timeFromLastUpdateMedHum > timePerFrameMedidores) {
       $medHum_1.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum}.png`);
       timeWhenLastUpdateMedHum = startTime;

       if (frameNumberMedHum == framesMedHum) {
         $medHum_1.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum}.png`);
         return;
       } else if (frameNumberMedHum > framesMedHum) {
         frameNumberMedHum = frameNumberMedHum - 1;
       } else {
         frameNumberMedHum = frameNumberMedHum + 1;
       }
   }
   requestAnimationFrame(animacionHumedad);
}

/* ANIMACION CO2 */
function requestCO2(co2) {
  actualCO2 = co2;
  let percentage = -0.000123*co2*co2 + 0.2673*co2 - 44.591;
  if (percentage < 1) { percentage = 1; }
  else if (percentage > 100) { percentage = 100; }
  framesMedCO2 = parseInt(totalFramesMedCO2*percentage/100, 10);
  textCO2.innerHTML = `${co2} ppm`;
  requestAnimationFrame(animacionCO2);
}

function animacionCO2(startTime) {
   if (!timeWhenLastUpdateMedCO2) timeWhenLastUpdateMedCO2 = startTime;
   timeFromLastUpdateMedCO2 = startTime - timeWhenLastUpdateMedCO2;

   if (timeFromLastUpdateMedCO2 > timePerFrameMedidores) {
       $medCO2_1.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2}.png`);
       timeWhenLastUpdateMedCO2 = startTime;

       if (frameNumberMedCO2 == framesMedCO2) {
           $medCO2_1.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2}.png`);
           return;
       } else if (frameNumberMedCO2 > framesMedCO2) {
           frameNumberMedCO2 = frameNumberMedCO2 - 1;
       } else {
           frameNumberMedCO2 = frameNumberMedCO2 + 1;
       }
   }
   requestAnimationFrame(animacionCO2);
}

/* ANIMACION RECTANGULOS */
function requestRec1(color) {
  if (colorRec1 !== color) {
    if (color === 'gray'){
      if (colorRec1 === 'blue') {
        framesRec1 = 72;
      } else if (colorRec1 === 'yellow') {
        framesRec1 = 0;
      }
    } else if (color === 'blue') {
      framesRec1 = 48;
      if (colorRec1 === 'gray') {
        frameNumberRec1 = 72;
      }
    } else if (color === 'yellow') {
      framesRec1 = 24;
      if (colorRec1 === 'gray') {
        frameNumberRec1 = 0;
      }
    }
    colorRec1 = color;
  }
  requestAnimationFrame(animacionRec1);
}

function animacionRec1(startTime) {
  if (!timeWhenLastUpdateRec1) timeWhenLastUpdateRec1 = startTime;
  timeFromLastUpdateRec1 = startTime - timeWhenLastUpdateRec1;

  if (timeFromLastUpdateRec1 > timePerFrameRectangulo) {
      $Rec1_1.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1}.png`);
      timeWhenLastUpdateRec1 = startTime;

      if (frameNumberRec1 == framesRec1) {
          $Rec1_1.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1}.png`);
          return;
      } else if (frameNumberRec1 > framesRec1) {
          frameNumberRec1 = frameNumberRec1 - 1;
      } else {
          frameNumberRec1 = frameNumberRec1 + 1;
      }
  }
  requestAnimationFrame(animacionRec1);
}

function requestRec2(color) {
  if (colorRec2 !== color) {
    if (color === 'gray'){
      if (colorRec2 === 'blue') {
        framesRec2 = 72;
      } else if (colorRec2 === 'yellow') {
        framesRec2 = 0;
      }
    } else if (color === 'blue') {
      framesRec2 = 48;
      if (colorRec2 === 'gray') {
        frameNumberRec2 = 72;
      }
    } else if (color === 'yellow') {
      framesRec2 = 24;
      if (colorRec2 === 'gray') {
        frameNumberRec2 = 0;
      }
    }
    colorRec2 = color;
  }
  requestAnimationFrame(animacionRec2);
}

function animacionRec2(startTime) {
  if (!timeWhenLastUpdateRec2) timeWhenLastUpdateRec2 = startTime;
  timeFromLastUpdateRec2 = startTime - timeWhenLastUpdateRec2;

  if (timeFromLastUpdateRec2 > timePerFrameRectangulo) {
      $Rec2_1.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2}.png`);
      timeWhenLastUpdateRec2 = startTime;

      if (frameNumberRec2 == framesRec2) {
          $Rec2_1.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2}.png`);
          return;
      } else if (frameNumberRec2 > framesRec2) {
          frameNumberRec2 = frameNumberRec2 - 1;
      } else {
          frameNumberRec2 = frameNumberRec2 + 1;
      }
  }
  requestAnimationFrame(animacionRec2);
}

function requestRec3(color) {
  if (colorRec3 !== color) {
    if (color === 'gray'){
      if (colorRec3 === 'blue') {
        framesRec3 = 72;
      } else if (colorRec3 === 'yellow') {
        framesRec3 = 0;
      }
    } else if (color === 'blue') {
      framesRec3 = 48;
      if (colorRec3 === 'gray') {
        frameNumberRec3 = 72;
      }
    } else if (color === 'yellow') {
      framesRec3 = 24;
      if (colorRec3 === 'gray') {
        frameNumberRec3 = 0;
      }
    }
    colorRec3 = color;
  }
  requestAnimationFrame(animacionRec3);
}

function animacionRec3(startTime) {
  if (!timeWhenLastUpdateRec3) timeWhenLastUpdateRec3 = startTime;
  timeFromLastUpdateRec3 = startTime - timeWhenLastUpdateRec3;

  if (timeFromLastUpdateRec3 > timePerFrameRectangulo) {
      $Rec3_1.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3}.png`);
      timeWhenLastUpdateRec3 = startTime;

      if (frameNumberRec3 == framesRec3) {
          $Rec3_1.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3}.png`);
          return;
      } else if (frameNumberRec3 > framesRec3) {
          frameNumberRec3 = frameNumberRec3 - 1;
      } else {
          frameNumberRec3 = frameNumberRec3 + 1;
      }
  }
  requestAnimationFrame(animacionRec3);
}

function requestRec4(color) {
  if (colorRec4 !== color) {
    if (color === 'gray'){
      if (colorRec4 === 'blue') {
        framesRec4 = 72;
      } else if (colorRec4 === 'yellow') {
        framesRec4 = 0;
      }
    } else if (color === 'blue') {
      framesRec4 = 48;
      if (colorRec4 === 'gray') {
        frameNumberRec4 = 72;
      }
    } else if (color === 'yellow') {
      framesRec4 = 24;
      if (colorRec4 === 'gray') {
        frameNumberRec4 = 0;
      }
    }
    colorRec4 = color;
  }
  requestAnimationFrame(animacionRec4);
}

function animacionRec4(startTime) {
  if (!timeWhenLastUpdateRec4) timeWhenLastUpdateRec4 = startTime;
  timeFromLastUpdateRec4 = startTime - timeWhenLastUpdateRec4;

  if (timeFromLastUpdateRec4 > timePerFrameRectangulo) {
      $Rec4_1.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4}.png`);
      timeWhenLastUpdateRec4 = startTime;

      if (frameNumberRec4 == framesRec4) {
          $Rec4_1.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4}.png`);
          return;
      } else if (frameNumberRec4 > framesRec4) {
          frameNumberRec4 = frameNumberRec4 - 1;
      } else {
          frameNumberRec4 = frameNumberRec4 + 1;
      }
  }
  requestAnimationFrame(animacionRec4);
}

function requestRec5(color) {
  if (colorRec5 !== color) {
    if (color === 'gray'){
      if (colorRec5 === 'blue') {
        framesRec5 = 72;
      } else if (colorRec5 === 'yellow') {
        framesRec5 = 0;
      }
    } else if (color === 'blue') {
      framesRec5 = 48;
      if (colorRec5 === 'gray') {
        frameNumberRec5 = 72;
      }
    } else if (color === 'yellow') {
      framesRec5 = 24;
      if (colorRec5 === 'gray') {
        frameNumberRec5 = 0;
      }
    }
    colorRec5 = color;
  }
  requestAnimationFrame(animacionRec5);
}

function animacionRec5(startTime) {
  if (!timeWhenLastUpdateRec5) timeWhenLastUpdateRec5 = startTime;
  timeFromLastUpdateRec5 = startTime - timeWhenLastUpdateRec5;

  if (timeFromLastUpdateRec5 > timePerFrameRectangulo) {
      $Rec5_1.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5}.png`);
      timeWhenLastUpdateRec5 = startTime;

      if (frameNumberRec5 == framesRec5) {
          $Rec5_1.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5}.png`);
          return;
      } else if (frameNumberRec5 > framesRec5) {
          frameNumberRec5 = frameNumberRec5 - 1;
      } else {
          frameNumberRec5 = frameNumberRec5 + 1;
      }
  }
  requestAnimationFrame(animacionRec5);
}

function requestRec6(color) {
  if (colorRec6 !== color) {
    if (color === 'gray'){
      if (colorRec6 === 'blue') {
        framesRec6 = 72;
      } else if (colorRec6 === 'yellow') {
        framesRec6 = 0;
      }
    } else if (color === 'blue') {
      framesRec6 = 48;
      if (colorRec6 === 'gray') {
        frameNumberRec6 = 72;
      }
    } else if (color === 'yellow') {
      framesRec6 = 24;
      if (colorRec6 === 'gray') {
        frameNumberRec6 = 0;
      }
    }
    colorRec6 = color;
  }
  requestAnimationFrame(animacionRec6);
}

function animacionRec6(startTime) {
  if (!timeWhenLastUpdateRec6) timeWhenLastUpdateRec6 = startTime;
  timeFromLastUpdateRec6 = startTime - timeWhenLastUpdateRec6;

  if (timeFromLastUpdateRec6 > timePerFrameRectangulo) {
      $Rec6_1.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6}.png`);
      timeWhenLastUpdateRec6 = startTime;

      if (frameNumberRec6 == framesRec6) {
          $Rec6_1.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6}.png`);
          return;
      } else if (frameNumberRec6 > framesRec6) {
          frameNumberRec6 = frameNumberRec6 - 1;
      } else {
          frameNumberRec6 = frameNumberRec6 + 1;
      }
  }
  requestAnimationFrame(animacionRec6);
}

function requestRec7(color) {
  if (colorRec7 !== color) {
    if (color === 'gray'){
      if (colorRec7 === 'blue') {
        framesRec7 = 72;
      } else if (colorRec7 === 'yellow') {
        framesRec7 = 0;
      }
    } else if (color === 'blue') {
      framesRec7 = 48;
      if (colorRec7 === 'gray') {
        frameNumberRec7 = 72;
      }
    } else if (color === 'yellow') {
      framesRec7 = 24;
      if (colorRec7 === 'gray') {
        frameNumberRec7 = 0;
      }
    }
    colorRec7 = color;
  }
  requestAnimationFrame(animacionRec7);
}

function animacionRec7(startTime) {
  if (!timeWhenLastUpdateRec7) timeWhenLastUpdateRec7 = startTime;
  timeFromLastUpdateRec7 = startTime - timeWhenLastUpdateRec7;

  if (timeFromLastUpdateRec7 > timePerFrameRectangulo) {
      $Rec7_1.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7}.png`);
      timeWhenLastUpdateRec7 = startTime;

      if (frameNumberRec7 == framesRec7) {
          $Rec7_1.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7}.png`);
          return;
      } else if (frameNumberRec7 > framesRec7) {
          frameNumberRec7 = frameNumberRec7 - 1;
      } else {
          frameNumberRec7 = frameNumberRec7 + 1;
      }
  }
  requestAnimationFrame(animacionRec7);
}

function requestRec8(color) {
  if (colorRec8 !== color) {
    if (color === 'gray'){
      if (colorRec8 === 'blue') {
        framesRec8 = 72;
      } else if (colorRec8 === 'yellow') {
        framesRec8 = 0;
      }
    } else if (color === 'blue') {
      framesRec8 = 48;
      if (colorRec8 === 'gray') {
        frameNumberRec8 = 72;
      }
    } else if (color === 'yellow') {
      framesRec8 = 24;
      if (colorRec8 === 'gray') {
        frameNumberRec8 = 0;
      }
    }
    colorRec8 = color;
  }
  requestAnimationFrame(animacionRec8);
}

function animacionRec8(startTime) {
  if (!timeWhenLastUpdateRec8) timeWhenLastUpdateRec8 = startTime;
  timeFromLastUpdateRec8 = startTime - timeWhenLastUpdateRec8;

  if (timeFromLastUpdateRec8 > timePerFrameRectangulo) {
      $Rec8_1.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8}.png`);
      timeWhenLastUpdateRec8 = startTime;

      if (frameNumberRec8 == framesRec8) {
          $Rec8_1.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8}.png`);
          return;
      } else if (frameNumberRec8 > framesRec8) {
          frameNumberRec8 = frameNumberRec8 - 1;
      } else {
          frameNumberRec8 = frameNumberRec8 + 1;
      }
  }
  requestAnimationFrame(animacionRec8);
}

function start() {
    if (timeFromLastUpdateMedTemp>timePerFrameMedidores &&
      timeFromLastUpdateMedHum>timePerFrameMedidores &&
      timeFromLastUpdateMedCO2>timePerFrameMedidores &&
      timeFromLastUpdateRiego>timePerFrameRiego &&
      timeFromLastUpdatePlantas>timePerFramePlantas &&
      timeFromLastUpdateLuces>timePerFrameLuces) {
        clearInterval(startSequence);
        startSequence = false;
      }
}

var query1 = new Parse.Query(Config);
query1.equalTo('systemId', sysID);
query1.descending('createdAt');
query1.limit(1);
query1.find()
.then((state) => {
  configId = state[0].id;

  const ptr = {
    __type: 'Pointer',
    className: 'Config',
    objectId: configId
  };

  var query2 = new Parse.Query(Screen);
  query2.equalTo('system', ptr);
  query2.find().then((screen) => {
    screenId = screen[0].id;
    scr.set('objectId', screenId);

    let liveState = new Parse.Query('State');
    let subscription = liveState.subscribe().then( (sub) => {
      console.log('LiveQuery Subscription to State Class succeed');
      sub.on('create', (object) => {
        console.log('State object created', object.attributes);
        if (configId === object.attributes.system.id && startSequence===false) {
          if (object.attributes.FAN1===true && runVentiladores===false) {
            //console.log('VENTILADOR ON');
            runVentiladores = true;
            requestAnimationFrame(animacionVentiladores);
          } else if (object.attributes.FAN1===false && runVentiladores===true) {
            //console.log('VENTILADOR OFF');
            runVentiladores = false;
          }
          if ( (object.attributes.EV1A1 || object.attributes.EV1B1 ||
                object.attributes.EV2A1 || object.attributes.EV2B1 ||
                object.attributes.EV3A1 || object.attributes.EV3B1 ||
                object.attributes.EV4A1 || object.attributes.EV4B1)
                && frameNumberRiego>=framesRiego) {
            frameNumberRiego = 1;
            requestAnimationFrame(animacionRiego);
          }
          if (object.attributes.Grower3.temp !== undefined || object.attributes.Grower3.temp !== null){
            if (Math.abs(actualTemp-object.attributes.Grower3.temp)>1) {
              requestTemp(object.attributes.Grower3.temp);
            }
          }
          if (object.attributes.Grower3.hum !== undefined || object.attributes.Grower3.hum !== null){
            if (Math.abs(actualHum-object.attributes.Grower3.hum)>5) {
              requestHum(object.attributes.Grower3.hum);
            }
          }
          if (object.attributes.Grower3.co2 !== undefined || object.attributes.Grower3.co2 !== null){
            if (Math.abs(actualCO2-object.attributes.Grower3.co2)>15) {
              requestCO2(object.attributes.Grower3.co2);
            }
          }
        }
      });
    }, (error) => {
      console.log(error);
    });

    let liveScreens = new Parse.Query('Screens');
    let subscription1 = liveScreens.subscribe().then( (sub1) => {
      console.log('LiveQuery Subscription to Screens Class succeed');
      sub1.on('create', (object) => {
        console.log('Screens object created', object.attributes);
        if (configId === object.attributes.system.id) {
          console.log('YAS');
        }
      });
      sub1.on('update', (object) => {
        console.log('Screens object updated');
        if (configId === object.attributes.system.id) {
          if (object.attributes.floor1) {
            $("#header").css("visibility", "visible");
            $("#medidores").css("visibility", "visible");
            $("#mainLayout").css("visibility", "visible");
            //if (startSequence) {
            if (true) {
              framesMedTemp = 1;
              framesMedHum = 1;
              framesMedCO2 = 1;
              frameNumberVentiladores = 1;
              frameNumberPlantas = 1;
              frameNumberRiego = 1;
              frameNumberLuces = 1;
              frameNumberMedTemp = 1;
              frameNumberMedHum = 1;
              frameNumberMedCO2 = 1;
              requestAnimationFrame(animacionPlantas);
              requestAnimationFrame(animacionLuces);
              requestCO2(400);
              requestTemp(20);
              requestHum(50);
              startSequence = setInterval(start, 1000);
            }
          } else {
            $("#header").css("visibility", "hidden");
            $("#medidores").css("visibility", "hidden");
            $("#mainLayout").css("visibility", "hidden");
          }
        }
      });
    }, (error) => {
      console.log(error);
    });

    }, (error) => {
      console.log(error);
    }
  );
}, (error) => {
  console.log(error);
});
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

    for (var i = 1; i < totalFramesMedCO2 + 1; i++) {
        $('body').append(`<div id="preload-image-${0000 + i}" style="background-image: url('${pathMedCO2}Medidor_CO2_${i}.png');"></div>`);
    }

    for (var i = 1; i < totalFramesMedTemp + 1; i++) {
        $('body').append(`<div id="preload-image-${00000 + i}" style="background-image: url('${pathMedTemp}Medidor_Temp_${i}.png');"></div>`);
    }

    for (var i = 1; i < totalFramesMedHum + 1; i++) {
        $('body').append(`<div id="preload-image-${000000 + i}" style="background-image: url('${pathMedHum}Medidor_Humedad_${i}.png');"></div>`);
    }
});

/* Cuando hayan cargado todas las imágenes empezaremos las animaciones o podremos activarlas por medio de los botones correspondientes */
$(window).on('load', () => {
  requestRec1('yellow');
  requestRec2('yellow');
  requestRec3('yellow');
  requestRec4('yellow');
  requestRec5('yellow');
  requestRec6('yellow');
  requestRec7('yellow');
  requestRec8('yellow');
  requestAnimationFrame(animacionPlantas);
  requestAnimationFrame(animacionLuces);
});
