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
const $ventiladores = $('#ventiladores');
const $plantas = $('#plantas');
const $riego = $('#riego');
const $luces = $('#luces');
const $medTemp = $('#medTemp');
const $medHum = $('#medHum');
const $medCO2 = $('#medCO2');

// Path to img
const pathVentiladores = './img/Ventiladores/';
const pathPlantas = './img/PlantasP1/';
const pathRiego = './img/ChorrosAgua/';
const pathLuces = './img/FocosMorados/';
const pathMedTemp = './img/Medidor_Temp/';
const pathMedHum = './img/Medidor_Humedad/';
const pathMedCO2 = './img/Medidor_CO2/';

// Total Frames
const framesVentiladores = 120;
const framesPlantas = 435;
const framesRiego = 419;
const framesLuces = 336;
const totalFramesMedTemp = 120;
const totalFramesMedHum = 120;
const totalFramesMedCO2 = 120;

// Animation velocity
const timePerFrameVentiladores = 42;
const timePerFramePlantas = 42;
const timePerFrameRiego = 21;
const timePerFrameLuces = 42;
const timePerFrameMedidores = 42;

// Actual Frames
let framesMedTemp = 1;
let framesMedHum = 1;
let framesMedCO2 = 1;
let frameNumberVentiladores = 1;
let frameNumberPlantas = 1;
let frameNumberRiego = 1;
let frameNumberLuces = 1;
let frameNumberMedTemp = 1;
let frameNumberMedHum = 1;
let frameNumberMedCO2 = 1;

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

// Aux variables
let runVentiladores = true;
let actualTemp = 0;
let actualHum = 0;
let actualCO2 = 0;

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
       $plantas.attr('src', pathPlantas + `PlantitasP1_${frameNumberPlantas}.png`);

       /* Regresamos el tiempo transcurrido al inicio */
       timeWhenLastUpdatePlantas = startTime;

       /* Incrementamos el frame o forzamos un reseteo si es el último frame */
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
function animacionVentiladores(startTime){
  if (runVentiladores) {
    if (!timeWhenLastUpdateVentiladores) timeWhenLastUpdateVentiladores = startTime;
    timeFromLastUpdateVentiladores = startTime - timeWhenLastUpdateVentiladores;

    if (timeFromLastUpdateVentiladores > timePerFrameVentiladores) {
        $ventiladores.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
        timeWhenLastUpdateVentiladores = startTime;

        if (frameNumberVentiladores >= framesVentiladores) {
            frameNumberVentiladores = 13;
            $ventiladores.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores}.png`);
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
       $luces.attr('src', pathLuces + `FocosMorados_${frameNumberLuces}.png`);
       timeWhenLastUpdateLuces = startTime;

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
function animacionRiego(startTime){
   if (!timeWhenLastUpdateRiego) timeWhenLastUpdateRiego = startTime;
   timeFromLastUpdateRiego = startTime - timeWhenLastUpdateRiego;

   if (timeFromLastUpdateRiego > timePerFrameRiego) {
       $riego.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
       timeWhenLastUpdateRiego = startTime;

       if (frameNumberRiego >= framesRiego) {
           $riego.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego}.png`);
           return;
       } else {
           frameNumberRiego = frameNumberRiego + 1;
       }
   }
   requestAnimationFrame(animacionRiego);
}


/* ANIMACION Temp */
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
       $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp}.png`);
       timeWhenLastUpdateMedTemp = startTime;

       if (frameNumberMedTemp == framesMedTemp) {
         $medTemp.attr('src', pathMedTemp + `Medidor_Temp_${framesMedTemp}.png`);
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
       $medHum.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum}.png`);
       timeWhenLastUpdateMedHum = startTime;

       if (frameNumberMedHum == framesMedHum) {
         $medHum.attr('src', pathMedHum + `Medidor_Humedad_${framesMedHum}.png`);
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
       $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2}.png`);
       timeWhenLastUpdateMedCO2 = startTime;

       if (frameNumberMedCO2 == framesMedCO2) {
           $medCO2.attr('src', pathMedCO2 + `Medidor_CO2_${framesMedCO2}.png`);
           return;
       } else if (frameNumberMedCO2 > framesMedCO2) {
           frameNumberMedCO2 = frameNumberMedCO2 - 1;
       } else {
           frameNumberMedCO2 = frameNumberMedCO2 + 1;
       }
   }
   requestAnimationFrame(animacionCO2);
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

});
