// contenedores de información
const textTemp_1 = document.querySelector('#tempText_1');
const textHum_1 = document.querySelector('#humText_1');
const textCO2_1 = document.querySelector('#co2Text_1');

const textTemp_2 = document.querySelector('#tempText_2');
const textHum_2 = document.querySelector('#humText_2');
const textCO2_2 = document.querySelector('#co2Text_2');

const textTemp_3 = document.querySelector('#tempText_3');
const textHum_3 = document.querySelector('#humText_3');
const textCO2_3 = document.querySelector('#co2Text_3');

const textTemp_4 = document.querySelector('#tempText_4');
const textHum_4 = document.querySelector('#humText_4');
const textCO2_4 = document.querySelector('#co2Text_4');

// Contenedores quartes of screen
const $sistemaCompresion = $('#sistemaCompresion');
const $recirculado = $('#recirculado');
const $crecimiento1 = $('#crecimiento1');
const $crecimiento2 = $('#crecimiento2');
const $crecimiento3 = $('#crecimiento3');
const $crecimiento4 = $('#crecimiento4');


// contenedores de sprites (Reloj)
const $growyAnimated = $('#GrowyAnimated');
const $growy = $('#Growy');
const $clock = $('#clock');
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// contenedores de sprites (Compresor)
const $compresor = $('#compresor');
const $entradaA = $('#entradaA');
const $entradaB = $('#entradaB');
const $salidaA = $('#salidaA');
const $salidaB = $('#salidaB');
const $manometroA = $('#manometroA');
const $manometroB = $('#manometroB');
const $nivelA = $('#nivelA');
const $nivelB = $('#nivelB');

// contenedores de sprites (Recirculado)
const $focoT1 = $('#focoT1');
const $focoT2 = $('#focoT2');
const $focoT3 = $('#focoT3');
const $focoT4 = $('#focoT4');
const $focoT5 = $('#focoT5');
const $nivelT1 = $('#nivelT1');
const $nivelT2 = $('#nivelT2');
const $nivelT3 = $('#nivelT3');
const $nivelT4 = $('#nivelT4');
const $nivelT5 = $('#nivelT5');
const $nivelTA = $('#nivelTA');
const $nivelTB = $('#nivelTB');
const $entradaCompresor = $('#entradaCompresor');
const $salidaRecirculado = $('#salidaRecirculado');
const $entradaSMaker = $('#entradaSMaker');
const $salidaSMaker = $('#salidaSMaker');
const $entradaRecirculado = $('#entradaRecirculado');

// contenedores de sprites (Germinación)
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
const $ventiladores_1 = $('#ventiladores_1');
const $vent1_1 = $('#vent1_1');
const $vent2_1 = $('#vent2_1');

// contenedores de sprites (Etapa 1)
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
const $ventiladores_2 = $('#ventiladores_2');
const $vent1_2 = $('#vent1_2');
const $vent2_2 = $('#vent2_2');

// contenedores de sprites (Etapa 2)
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
const $ventiladores_3 = $('#ventiladores_3');
const $vent1_3 = $('#vent1_3');
const $vent2_3 = $('#vent2_3');

// contenedores de sprites (Cosecha)
const $plantas_4 = $('#plantas_4');
const $riego_4 = $('#riego_4');
const $luces_4 = $('#luces_4');
const $medTemp_4 = $('#medTemp_4');
const $medHum_4 = $('#medHum_4');
const $medCO2_4 = $('#medCO2_4');
const $Rec1_4 = $('#Rec1_4');
const $Rec2_4 = $('#Rec2_4');
const $Rec3_4 = $('#Rec3_4');
const $Rec4_4 = $('#Rec4_4');
const $Rec5_4 = $('#Rec5_4');
const $Rec6_4 = $('#Rec6_4');
const $Rec7_4 = $('#Rec7_4');
const $Rec8_4 = $('#Rec8_4');
const $ventiladores_4 = $('#ventiladores_4');
const $vent1_4 = $('#vent1_4');
const $vent2_4 = $('#vent2_4');

// Path to img
const genericPath = "./img/";
/**/
const pathCompresor = "./img/Compresor/Compresor_";
const pathEntradaA = "./img/LineasAgua/AguaTanqueA/AguaTanqueA_";
const pathEntradaB = "./img/LineasAgua/AguaTanqueB/AguaTanqueB_";
const pathSalidaA = "./img/LineasAgua/SalidaTanqueA/SalidaTanqueA_";
const pathSalidaB = "./img/LineasAgua/SalidaTanqueB/SalidaTanqueB_";
const pathManometroA = "./img/Manometros/ManometroSubeTanqueA/ManometroSubeTanqueA_";
const pathManometroB = "./img/Manometros/ManometroSubeTanqueB/ManometroSubeTanqueB_";
const pathNivelA = "./img/Niveles/N_Nutrientes/NivelesNutrientes_";
const pathNivelB = "./img/Niveles/N_Agua/NivelesAgua_";
/**/
const pathFocosRojos = "./img/Focos/Rojos/FocoRojoT5/FocoRojoTanque5_";
const pathFocosVerdes = "./img/Focos/Verdes/FocoVerdeT5/FocoVerdeTanque5_";
const pathNiveles = "./img/Niveles/";
const pathEntradaCompresor = "./img/LineasAgua/AguaSale/AguaSale_";
let pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn1/LineaAguaOn1_";
let pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque1/AguaSaleTanque1_";
const pathEntradaSMaker = "./img/LineasAgua/LlenadoTanqueGris/llenadoTanqueGris_";
const pathSalidaSMaker = "./img/LineasAgua/VaciadoTanqueGris/VaciadoTanqueGris_";
const pathVentiladores = './img/Ventiladores/';
const pathVentilador1 = './img/Ventilador1/';
const pathVentilador2 = './img/Ventilador2/';
const pathPlantas1 = './img/PlantasP1/';
const pathPlantas2 = './img/PlantasP2/';
const pathPlantas3 = './img/PlantasP3/';
const pathPlantas4 = './img/PlantasP4/';
const pathRiego = './img/ChorrosAgua/';
const pathLuces = './img/FocosMorados/';
const pathLuces1 = './img/FocosAmarillos/';
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
const totalFramesVent = 48;
const totalFrameLineasAgua72 = 72;
const totalFrameLineasAgua58 = 58;
const totalFrameLineasAgua49 = 49;
const totalFrameFocoTanque = 39;
const totalFrameNivelRecirculado = 25;
/**/
const totalFrameCompresor = 69;
const totalFrameNivelCompresor = 72;
const totalFrameManometroCompresor = 66;
const totalFrameEntradaCompresor = 120;
const totalFrameSalidaCompresor = 96;
/**/

// Animation velocity
const timePerFrameVentiladores = 42;
const timePerFramePlantas = 42;
const timePerFrameRiego = 42;
const timePerFrameLuces = 42;
const timePerFrameMedidores = 42;
const timePerFrameRectangulo = 42;
const timePerFrameRecirculado = 42;
const timePerFrameReloj = 1000;
const timePerFrameCompresor = 42;
let riegoVelocity = 1;

// Actual Frames
// Reloj
const animacion = 'español';
let timePerFrameGrowy = 0;
let framesGrowy = 0;
if (animacion === 'original'){
  timePerFrameGrowy = 42;
  framesGrowy = 1864;
}
else if (animacion === 'español'){
  timePerFrameGrowy = 42;
  framesGrowy = 1750;
}
else if (animacion === 'ingles'){
  timePerFrameGrowy = 42;
  framesGrowy = 1750;
}

let frameNumberGrowy = 0;

// (Compresor)
let framesCompresor = 0;
let framesEntradaA = 0;
let framesEntradaB = 0;
let framesSalidaA = 0;
let framesSalidaB = 0;
let framesManometroA = 0;
let framesManometroB = 0;
let framesNivelA = 0;
let framesNivelB = 0;
let framesNumberEntradaA = 0;
let framesNumberEntradaB = 0;
let framesNumberSalidaA = 0;
let framesNumberSalidaB = 0;
let framesNumberManometroA = 0;
let framesNumberManometroB = 0;
let framesNumberNivelA = 0;
let framesNumberNivelB = 0;

// (Recirculado)
let framesFocoT1 = 0;
let framesFocoT2 = 0;
let framesFocoT3 = 0;
let framesFocoT4 = 0;
let framesFocoT5 = 0;
let framesNivelT1 = 0;
let framesNivelT2 = 0;
let framesNivelT3 = 0;
let framesNivelT4 = 0;
let framesNivelT5 = 0;
let framesNivelTA = 0;
let framesNivelTB = 0;
let framesNumberNivelT1 = 0;
let framesNumberNivelT2 = 0;
let framesNumberNivelT3 = 0;
let framesNumberNivelT4 = 0;
let framesNumberNivelT5 = 0;
let framesNumberNivelTA = 0;
let framesNumberNivelTB = 0;
let framesEntradaCompresor = 0;
let framesSalidaRecirculado = 0;
let framesEntradaSMaker = 0;
let framesSalidaSMaker = 0;
let framesEntradaRecirculado = 0;

// ( Siembra )
let framesMedTemp_1 = 1;
let framesMedHum_1 = 1;
let framesMedCO2_1 = 1;
let framesRec1_1 = 0;
let framesRec2_1 = 0;
let framesRec3_1 = 0;
let framesRec4_1 = 0;
let framesRec5_1 = 0;
let framesRec6_1 = 0;
let framesRec7_1 = 0;
let framesRec8_1 = 0;
let frameNumberVentiladores_1 = 1;
let frameNumberPlantas_1 = 1;
let frameNumberRiego_1 = 0;
let frameNumberLuces_1 = 4;
let frameNumberMedTemp_1 = 1;
let frameNumberMedHum_1 = 1;
let frameNumberMedCO2_1 = 1;
let frameNumberRec1_1 = 0;
let frameNumberRec2_1 = 0;
let frameNumberRec3_1 = 0;
let frameNumberRec4_1 = 0;
let frameNumberRec5_1 = 0;
let frameNumberRec6_1 = 0;
let frameNumberRec7_1 = 0;
let frameNumberRec8_1 = 0;
let frameNumberVent1_1 = 0;
let frameNumberVent2_1 = 0;

// ( Etapa 1 )
let framesMedTemp_2 = 1;
let framesMedHum_2 = 1;
let framesMedCO2_2 = 1;
let framesRec1_2 = 0;
let framesRec2_2 = 0;
let framesRec3_2 = 0;
let framesRec4_2 = 0;
let framesRec5_2 = 0;
let framesRec6_2 = 0;
let framesRec7_2 = 0;
let framesRec8_2 = 0;
let frameNumberVentiladores_2 = 1;
let frameNumberPlantas_2 = 1;
let frameNumberRiego_2 = 0;
let frameNumberLuces_2 = 4;
let frameNumberMedTemp_2 = 1;
let frameNumberMedHum_2 = 1;
let frameNumberMedCO2_2 = 1;
let frameNumberRec1_2 = 0;
let frameNumberRec2_2 = 0;
let frameNumberRec3_2 = 0;
let frameNumberRec4_2 = 0;
let frameNumberRec5_2 = 0;
let frameNumberRec6_2 = 0;
let frameNumberRec7_2 = 0;
let frameNumberRec8_2 = 0;
let frameNumberVent1_2 = 0;
let frameNumberVent2_2 = 0;

// ( Etapa 2 )
let framesMedTemp_3 = 1;
let framesMedHum_3 = 1;
let framesMedCO2_3 = 1;
let framesRec1_3 = 0;
let framesRec2_3 = 0;
let framesRec3_3 = 0;
let framesRec4_3 = 0;
let framesRec5_3 = 0;
let framesRec6_3 = 0;
let framesRec7_3 = 0;
let framesRec8_3 = 0;
let frameNumberVentiladores_3 = 1;
let frameNumberPlantas_3 = 1;
let frameNumberRiego_3 = 0;
let frameNumberLuces_3 = 1;
let frameNumberMedTemp_3 = 1;
let frameNumberMedHum_3 = 1;
let frameNumberMedCO2_3 = 1;
let frameNumberRec1_3 = 0;
let frameNumberRec2_3 = 0;
let frameNumberRec3_3 = 0;
let frameNumberRec4_3 = 0;
let frameNumberRec5_3 = 0;
let frameNumberRec6_3 = 0;
let frameNumberRec7_3 = 0;
let frameNumberRec8_3 = 0;
let frameNumberVent1_3 = 0;
let frameNumberVent2_3 = 0;

// ( Cosecha )
let framesMedTemp_4 = 1;
let framesMedHum_4 = 1;
let framesMedCO2_4 = 1;
let framesRec1_4 = 0;
let framesRec2_4 = 0;
let framesRec3_4 = 0;
let framesRec4_4 = 0;
let framesRec5_4 = 0;
let framesRec6_4 = 0;
let framesRec7_4 = 0;
let framesRec8_4 = 0;
let frameNumberVentiladores_4 = 1;
let frameNumberPlantas_4 = 1;
let frameNumberRiego_4 = 0;
let frameNumberLuces_4 = 1;
let frameNumberMedTemp_4 = 1;
let frameNumberMedHum_4 = 1;
let frameNumberMedCO2_4 = 1;
let frameNumberRec1_4 = 0;
let frameNumberRec2_4 = 0;
let frameNumberRec3_4 = 0;
let frameNumberRec4_4 = 0;
let frameNumberRec5_4 = 0;
let frameNumberRec6_4 = 0;
let frameNumberRec7_4 = 0;
let frameNumberRec8_4 = 0;
let frameNumberVent1_4 = 0;
let frameNumberVent2_4 = 0;

// Timers
let timeWhenLastUpdateGrowy;
let timeFromLastUpdateGrowy;

let timeWhenLastUpdateCompresor;
let timeFromLastUpdateCompresor;

let timeWhenLastUpdateRecirculado;
let timeFromLastUpdateRecirculado;

let timeWhenLastUpdateVentiladores;
let timeFromLastUpdateVentiladores;

let timeWhenLastUpdatePlantas_1;
let timeFromLastUpdatePlantas_1;
let timeWhenLastUpdatePlantas_2;
let timeFromLastUpdatePlantas_2;
let timeWhenLastUpdatePlantas_3;
let timeFromLastUpdatePlantas_3;
let timeWhenLastUpdatePlantas_4;
let timeFromLastUpdatePlantas_4;

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

let timeWhenLastUpdateRec;
let timeFromLastUpdateRec;

let timeWhenLastUpdateReloj;
let timeFromLastUpdateReloj;

// Aux variables
// Compresor
let showCompresor = false;
let showCompresorStage = 0;
let runCompresor = false;

// Recirculado
let showRecirculado = false;
let showRecirculadoStage = 0;
let actTank1 = 0;
let actTank2 = 0;
let actTank3 = 0;
let actTank4 = 0;
let actTank5 = 0;
let EntradaTanqueA = false;
let EntradaTanqueB = false;
let SalidaTanqueA = false;
let SalidaTanqueB = false;
let RecirculadoEntradaCompresor = false;
let RecirculadoEntradaSMaker = false;
let RecirculadoSalidaSMaker = false;
let RecirculadoEntrada = false;
let TanqueEntrada = 0;
let RecirculadoSalida = false;
let TanqueSalida = 0;

// Manecillas del reloj
let secondsDegrees = 0;

let showPlanta = false;
// (Siembra)
let showPlanta1 = false;
let runVent1_1 = false;
let runVent2_1 = false;
let runRiego_1 = false;
let queryRiego_1 = false;
let runVentiladores_1 = false;
let actualTemp_1 = 0;
let actualHum_1 = 0;
let actualCO2_1 = 0;
let colorRec1_1 = 'gray';
let colorRec2_1 = 'gray';
let colorRec3_1 = 'gray';
let colorRec4_1 = 'gray';
let colorRec5_1 = 'gray';
let colorRec6_1 = 'gray';
let colorRec7_1 = 'gray';
let colorRec8_1 = 'gray';

// (Etapa 1)
let showPlanta2 = false;
let runVent1_2 = false;
let runVent2_2 = false;
let runRiego_2 = false;
let queryRiego_2 = false;
let runVentiladores_2 = false;
let actualTemp_2 = 0;
let actualHum_2 = 0;
let actualCO2_2 = 0;
let colorRec1_2 = 'gray';
let colorRec2_2 = 'gray';
let colorRec3_2 = 'gray';
let colorRec4_2 = 'gray';
let colorRec5_2 = 'gray';
let colorRec6_2 = 'gray';
let colorRec7_2 = 'gray';
let colorRec8_2 = 'gray';

// (Etapa 2)
let showPlanta3 = false;
let runVent1_3 = false;
let runVent2_3 = false;
let runRiego_3 = false;
let queryRiego_3 = false;
let runVentiladores_3 = false;
let actualTemp_3 = 0;
let actualHum_3 = 0;
let actualCO2_3 = 0;
let colorRec1_3 = 'gray';
let colorRec2_3 = 'gray';
let colorRec3_3 = 'gray';
let colorRec4_3 = 'gray';
let colorRec5_3 = 'gray';
let colorRec6_3 = 'gray';
let colorRec7_3 = 'gray';
let colorRec8_3 = 'gray';

// (Cosecha)
let showPlanta4 = false;
let runVent1_4 = false;
let runVent2_4 = false;
let runRiego_4 = false;
let queryRiego_4 = false;
let runVentiladores_4 = false;
let actualTemp_4 = 0;
let actualHum_4 = 0;
let actualCO2_4 = 0;
let colorRec1_4 = 'gray';
let colorRec2_4 = 'gray';
let colorRec3_4 = 'gray';
let colorRec4_4 = 'gray';
let colorRec5_4 = 'gray';
let colorRec6_4 = 'gray';
let colorRec7_4 = 'gray';
let colorRec8_4 = 'gray';

// Initial Container_Frontal
let recCounter = 0;

/* Función Animación Global */
function animation(startTime){
  if (scr.attributes.growy!==undefined && scr.attributes.growy){
    if (!timeWhenLastUpdateGrowy) timeWhenLastUpdateGrowy = startTime;
    timeFromLastUpdateGrowy = startTime - timeWhenLastUpdateGrowy;

    if (timeFromLastUpdateGrowy > timePerFrameGrowy) {
      let imageUrl = '';
      // Original
      if (animacion === 'original'){
        if (frameNumberGrowy<10){
          imageUrl = `./img/Growy/Growy_0000${frameNumberGrowy}.png`;
        } else if (frameNumberGrowy<100) {
          imageUrl = `./img/Growy/Growy_000${frameNumberGrowy}.png`;
        } else if (frameNumberGrowy<1000) {
          imageUrl = `./img/Growy/Growy_00${frameNumberGrowy}.png`;
        } else if (frameNumberGrowy<10000) {
          imageUrl = `./img/Growy/Growy_0${frameNumberGrowy}.png`;
        } else {
          imageUrl = `./img/Growy/Growy_${frameNumberGrowy}.png`;
        }
      }
     // Español
     else if (animacion === 'español'){
       if (frameNumberGrowy<10){
         imageUrl = `./img/GROWY_ES/GROWY_ES0000${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<100) {
         imageUrl = `./img/GROWY_ES/GROWY_ES000${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<1000) {
         imageUrl = `./img/GROWY_ES/GROWY_ES00${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<10000) {
         imageUrl = `./img/GROWY_ES/GROWY_ES0${frameNumberGrowy}.png`;
       } else {
         imageUrl = `./img/GROWY_ES/GROWY_ES${frameNumberGrowy}.png`;
       }
     }
     // Ingles
     else if (animacion === 'ingles'){
       if (frameNumberGrowy<10){
         imageUrl = `./img/GROWY_EN/GROWY_EN0000${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<100) {
         imageUrl = `./img/GROWY_EN/GROWY_EN000${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<1000) {
         imageUrl = `./img/GROWY_EN/GROWY_EN00${frameNumberGrowy}.png`;
       } else if (frameNumberGrowy<10000) {
         imageUrl = `./img/GROWY_EN/GROWY_EN0${frameNumberGrowy}.png`;
       } else {
         imageUrl = `./img/GROWY_EN/GROWY_EN${frameNumberGrowy}.png`;
       }
     }
      $growy.attr('src', imageUrl);
      timeWhenLastUpdateGrowy = startTime;

      if (frameNumberGrowy >= framesGrowy-1) {
        $growyAnimated.css("visibility", "hidden");
        $clock.css("visibility", "visible");
        secondsDegrees = 0;
        setDate();
        // Update the object.
        scr.set('objectId', screenId);
        scr.set('growy', false);
        scr.save().then((screen) => {
          console.log('Updating screen class to finish growy sequence', scr.attributes);
        }, (error) => {
          console.log(error);
        });
      } else {
          frameNumberGrowy = frameNumberGrowy + 1;
      }
    }
  }

  if(showPlanta1){
    if (!timeWhenLastUpdatePlantas_1) timeWhenLastUpdatePlantas_1 = startTime;
    timeFromLastUpdatePlantas_1 = startTime - timeWhenLastUpdatePlantas_1;

    // Después revisamos si ya pasó el tiempo necesario para cambiar de frame
    if (timeFromLastUpdatePlantas_1 > timePerFramePlantas) {
        $plantas_1.attr('src', pathPlantas1 + `PlantitasP1_${frameNumberPlantas_1}.png`);

        // Incrementamos el frame o forzamos un reseteo si es el último frame
        if (frameNumberPlantas_1 >= framesPlantas-95) {
          $plantas_1.attr('src', pathPlantas1 + `PlantitasP1_${frameNumberPlantas_1}.png`);
          showPlanta1 = false;
        } else if (frameNumberPlantas_1 === parseInt(framesPlantas/3,10)) {
          runVentiladores_1 = true;
          runVent1_1 = false;
          runVent2_1 = true;
          frameNumberPlantas_1 = frameNumberPlantas_1 + 1;
        } else if (frameNumberPlantas_1 === framesPlantas-100) {
          showPlanta2 = true;
          runVent1_2 = true;
          runRiego_2 = true;
          recCounter = 0;
          requestTemp(20, 2);
          requestHum(65, 2);
          requestCO2(435, 2);
          for (var j = 1; j < 8 + 1; j++) {
            requestRec('yellow', j, 2);
          }
          frameNumberPlantas_1 = frameNumberPlantas_1 + 1;
        } else {
          frameNumberPlantas_1 = frameNumberPlantas_1 + 1;
        }

        if (frameNumberRec1_1===framesRec1_1 && frameNumberRec2_1===framesRec2_1 &&
            frameNumberRec3_1===framesRec3_1 && frameNumberRec4_1===framesRec4_1 &&
            frameNumberRec5_1===framesRec5_1 && frameNumberRec6_1===framesRec6_1 &&
            frameNumberRec7_1===framesRec7_1 && frameNumberRec8_1===framesRec8_1){
          if (recCounter===0 && showPlanta2===false) {
            recCounter = recCounter + 1;
            requestRec('blue', 1, 1);
          } else if (recCounter===1) {
            recCounter = recCounter + 1;
            requestRec('yellow', 1, 1);
            requestRec('blue', 2, 1);
          } else if (recCounter===2) {
            recCounter = recCounter + 1;
            requestRec('yellow', 2, 1);
            requestRec('blue', 3, 1);
          } else if (recCounter===3) {
            recCounter = recCounter + 1;
            requestRec('yellow', 3, 1);
            requestRec('blue', 4, 1);
          } else if (recCounter===4) {
            recCounter = recCounter + 1;
            requestRec('yellow', 4, 1);
            requestRec('blue', 5, 1);
          } else if (recCounter===5) {
            recCounter = recCounter + 1;
            requestRec('yellow', 5, 1);
            requestRec('blue', 6, 1);
          } else if (recCounter===6) {
            recCounter = recCounter + 1;
            requestRec('yellow', 6, 1);
            requestRec('blue', 7, 1);
          } else if (recCounter===7) {
            recCounter = recCounter + 1;
            requestRec('yellow', 7, 1);
            requestRec('blue', 8, 1);
          } else if (recCounter===8) {
            recCounter = recCounter + 1;
            requestRec('yellow', 8, 1);
          }
        }
        // Regresamos el tiempo transcurrido al inicio
        timeWhenLastUpdatePlantas_1 = startTime;
    }

    if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
    timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

    if (timeFromLastUpdateLuces > timePerFrameLuces) {
      $luces_1.attr('src', pathLuces + `FocosMorados_${frameNumberLuces_1}.png`);
      if (showPlanta2 === false) timeWhenLastUpdateLuces = startTime;

      if (frameNumberLuces_1 >= framesLuces) {
        $luces_1.attr('src', pathLuces + `FocosMorados_${frameNumberLuces_1}.png`);
      } else {
        frameNumberLuces_1 = frameNumberLuces_1 + 1;
      }
    }
  }

  if(showPlanta2){
    if (!timeWhenLastUpdatePlantas_2) timeWhenLastUpdatePlantas_2 = startTime;
    timeFromLastUpdatePlantas_2 = startTime - timeWhenLastUpdatePlantas_2;

    // Después revisamos si ya pasó el tiempo necesario para cambiar de frame //
    if (timeFromLastUpdatePlantas_2 > timePerFramePlantas) {
        $plantas_2.attr('src', pathPlantas2 + `PlantitasP2_${frameNumberPlantas_2}.png`);

        // Incrementamos el frame o forzamos un reseteo si es el último frame
        if (frameNumberPlantas_2 >= framesPlantas-95) {
          $plantas_2.attr('src', pathPlantas2 + `PlantitasP2_${frameNumberPlantas_2}.png`);
          showPlanta2 = false;
        } else if (frameNumberPlantas_2 === parseInt(framesPlantas/3,10)) {
          runVentiladores_2 = true;
          runVent1_2 = false;
          runVent2_2 = true;
          frameNumberPlantas_2 = frameNumberPlantas_2 + 1;
        } else if (frameNumberPlantas_2 === framesPlantas-100) {
          showPlanta3 = true;
          runVent1_3 = true;
          runRiego_3 = true;
          //riegoVelocity = 2;
          recCounter = 0;
          requestTemp(22, 3);
          requestHum(60, 3);
          requestCO2(420, 3);
          for (var j = 1; j < 8 + 1; j++) {
            requestRec('yellow', j, 3);
          }
          frameNumberPlantas_2 = frameNumberPlantas_2 + 1;
        } else {
          frameNumberPlantas_2 = frameNumberPlantas_2 + 1;
        }

        if (frameNumberRec1_2===framesRec1_2 && frameNumberRec2_2===framesRec2_2 &&
            frameNumberRec3_2===framesRec3_2 && frameNumberRec4_2===framesRec4_2 &&
            frameNumberRec5_2===framesRec5_2 && frameNumberRec6_2===framesRec6_2 &&
            frameNumberRec7_2===framesRec7_2 && frameNumberRec8_2===framesRec8_2){
          if (recCounter===0 && showPlanta3===false) {
            recCounter = recCounter + 1;
            requestRec('blue', 1, 2);
          } else if (recCounter===1) {
            recCounter = recCounter + 1;
            requestRec('yellow', 1, 2);
            requestRec('blue', 2, 2);
          } else if (recCounter===2) {
            recCounter = recCounter + 1;
            requestRec('yellow', 2, 2);
            requestRec('blue', 3, 2);
          } else if (recCounter===3) {
            recCounter = recCounter + 1;
            requestRec('yellow', 3, 2);
            requestRec('blue', 4, 2);
          } else if (recCounter===4) {
            recCounter = recCounter + 1;
            requestRec('yellow', 4, 2);
            requestRec('blue', 5, 2);
          } else if (recCounter===5) {
            recCounter = recCounter + 1;
            requestRec('yellow', 5, 2);
            requestRec('blue', 6, 2);
          } else if (recCounter===6) {
            recCounter = recCounter + 1;
            requestRec('yellow', 6, 2);
            requestRec('blue', 7, 2);
          } else if (recCounter===7) {
            recCounter = recCounter + 1;
            requestRec('yellow', 7, 2);
            requestRec('blue', 8, 2);
          } else if (recCounter===8) {
            recCounter = recCounter + 1;
            requestRec('yellow', 8, 2);
          }
        }

        // Regresamos el tiempo transcurrido al inicio
        timeWhenLastUpdatePlantas_2 = startTime;
    }

    if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
    timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

    if (timeFromLastUpdateLuces > timePerFrameLuces) {
      $luces_2.attr('src', pathLuces + `FocosMorados_${frameNumberLuces_2}.png`);
      if (showPlanta3 === false) timeWhenLastUpdateLuces = startTime;

      if (frameNumberLuces_2 >= framesLuces) {
        $luces_2.attr('src', pathLuces + `FocosMorados_${frameNumberLuces_2}.png`);
      } else {
        frameNumberLuces_2 = frameNumberLuces_2 + 1;
      }
    }
  }

  if(showPlanta3){
    if (!timeWhenLastUpdatePlantas_3) timeWhenLastUpdatePlantas_3 = startTime;
    timeFromLastUpdatePlantas_3 = startTime - timeWhenLastUpdatePlantas_3;

    // Después revisamos si ya pasó el tiempo necesario para cambiar de frame
    if (timeFromLastUpdatePlantas_3 > timePerFramePlantas) {
        $plantas_3.attr('src', pathPlantas3 + `PlantitasP3_${frameNumberPlantas_3}.png`);

        // Incrementamos el frame o forzamos un reseteo si es el último frame
        if (frameNumberPlantas_3 >= framesPlantas-95) {
          $plantas_3.attr('src', pathPlantas3 + `PlantitasP3_${frameNumberPlantas_3}.png`);
          showPlanta3 = false;
        } else if (frameNumberPlantas_3 === parseInt(framesPlantas/3,10)) {
          runVentiladores_3 = true;
          runVent1_3 = false;
          runVent2_3 = true;
          frameNumberPlantas_3 = frameNumberPlantas_3 + 1;
        } else if (frameNumberPlantas_3 === framesPlantas-100) {
          showPlanta4 = true;
          runVent1_4 = true;
          runRiego_4 = true;
          recCounter = 0;
          requestTemp(22, 4);
          requestHum(65, 4);
          requestCO2(430, 4);
          for (var j = 1; j < 8 + 1; j++) {
            requestRec('yellow', j, 4);
          }
          frameNumberPlantas_3 = frameNumberPlantas_3 + 1;
        } else {
          frameNumberPlantas_3 = frameNumberPlantas_3 + 1;
        }

        if (frameNumberRec1_3===framesRec1_3 && frameNumberRec2_3===framesRec2_3 &&
            frameNumberRec3_3===framesRec3_3 && frameNumberRec4_3===framesRec4_3 &&
            frameNumberRec5_3===framesRec5_3 && frameNumberRec6_3===framesRec6_3 &&
            frameNumberRec7_3===framesRec7_3 && frameNumberRec8_3===framesRec8_3){
          if (recCounter===0 && showPlanta4===false) {
            recCounter = recCounter + 1;
            requestRec('blue', 1, 3);
          } else if (recCounter===1) {
            recCounter = recCounter + 1;
            requestRec('yellow', 1, 3);
            requestRec('blue', 2, 3);
          } else if (recCounter===2) {
            recCounter = recCounter + 1;
            requestRec('yellow', 2, 3);
            requestRec('blue', 3, 3);
          } else if (recCounter===3) {
            recCounter = recCounter + 1;
            requestRec('yellow', 3, 3);
            requestRec('blue', 4, 3);
          } else if (recCounter===4) {
            recCounter = recCounter + 1;
            requestRec('yellow', 4, 3);
            requestRec('blue', 5, 3);
          } else if (recCounter===5) {
            recCounter = recCounter + 1;
            requestRec('yellow', 5, 3);
            requestRec('blue', 6, 3);
          } else if (recCounter===6) {
            recCounter = recCounter + 1;
            requestRec('yellow', 6, 3);
            requestRec('blue', 7, 3);
          } else if (recCounter===7) {
            recCounter = recCounter + 1;
            requestRec('yellow', 7, 3);
            requestRec('blue', 8, 3);
          } else if (recCounter===8) {
            recCounter = recCounter + 1;
            requestRec('yellow', 8, 3);
          }
        }

        // Regresamos el tiempo transcurrido al inicio
        timeWhenLastUpdatePlantas_3 = startTime;
    }

    if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
    timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

    if (timeFromLastUpdateLuces > timePerFrameLuces) {
      $luces_3.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces_3}.png`);
      if (showPlanta4 === false) timeWhenLastUpdateLuces = startTime;

      if (frameNumberLuces_3 >= framesLuces) {
        $luces_3.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces_3}.png`);
      } else {
        frameNumberLuces_3 = frameNumberLuces_3 + 1;
      }
    }
  }

  if (showPlanta4){
    if (!timeWhenLastUpdatePlantas_4) timeWhenLastUpdatePlantas_4 = startTime;
    timeFromLastUpdatePlantas_4 = startTime - timeWhenLastUpdatePlantas_4;

    /* Después revisamos si ya pasó el tiempo necesario para cambiar de frame */
    if (timeFromLastUpdatePlantas_4 > timePerFramePlantas) {
        $plantas_4.attr('src', pathPlantas4 + `PlantitasP4_${frameNumberPlantas_4}.png`);

        /* Incrementamos el frame o forzamos un reseteo si es el último frame */
        if (frameNumberPlantas_4 >= framesPlantas-95) {
          $plantas_4.attr('src', pathPlantas4 + `PlantitasP4_${frameNumberPlantas_4}.png`);
          showPlanta4 = false;
          riegoVelocity = 3;
        } else if (frameNumberPlantas_4 === parseInt(framesPlantas/3,10)) {
          runVentiladores_4 = true;
          runVent1_4 = false;
          runVent2_4 = true;
          frameNumberPlantas_4 = frameNumberPlantas_4 + 1;
        } else {
          frameNumberPlantas_4 = frameNumberPlantas_4 + 1;
        }

        if (frameNumberRec1_4===framesRec1_4 && frameNumberRec2_4===framesRec2_4 &&
            frameNumberRec3_4===framesRec3_4 && frameNumberRec4_4===framesRec4_4 &&
            frameNumberRec5_4===framesRec5_4 && frameNumberRec6_4===framesRec6_4 &&
            frameNumberRec7_4===framesRec7_4 && frameNumberRec8_4===framesRec8_4){
          if (recCounter===0) {
            recCounter = recCounter + 1;
            requestRec('blue', 1, 4);
          } else if (recCounter===1) {
            recCounter = recCounter + 1;
            requestRec('yellow', 1, 4);
            requestRec('blue', 2, 4);
          } else if (recCounter===2) {
            recCounter = recCounter + 1;
            requestRec('yellow', 2, 4);
            requestRec('blue', 3, 4);
          } else if (recCounter===3) {
            recCounter = recCounter + 1;
            requestRec('yellow', 3, 4);
            requestRec('blue', 4, 4);
          } else if (recCounter===4) {
            recCounter = recCounter + 1;
            requestRec('yellow', 4, 4);
            requestRec('blue', 5, 4);
          } else if (recCounter===5) {
            recCounter = recCounter + 1;
            requestRec('yellow', 5, 4);
            requestRec('blue', 6, 4);
          } else if (recCounter===6) {
            recCounter = recCounter + 1;
            requestRec('yellow', 6, 4);
            requestRec('blue', 7, 4);
          } else if (recCounter===7) {
            recCounter = recCounter + 1;
            requestRec('yellow', 7, 4);
            requestRec('blue', 8, 4);
          } else if (recCounter===8) {
            recCounter = recCounter + 1;;
            requestRec('yellow', 8, 4);
          }
        }

        /* Regresamos el tiempo transcurrido al inicio */
        timeWhenLastUpdatePlantas_4 = startTime;
    }

    if (!timeWhenLastUpdateLuces) timeWhenLastUpdateLuces = startTime;
    timeFromLastUpdateLuces = startTime - timeWhenLastUpdateLuces;

    if (timeFromLastUpdateLuces > timePerFrameLuces) {
      $luces_4.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces_4}.png`);
      timeWhenLastUpdateLuces = startTime;

      if (frameNumberLuces_4 >= framesLuces) {
        $luces_4.attr('src', pathLuces1 + `FocosAmarillos_${frameNumberLuces_4}.png`);
      } else {
        frameNumberLuces_4 = frameNumberLuces_4 + 1;
      }
    }
  }

  if (!timeWhenLastUpdateVentiladores) timeWhenLastUpdateVentiladores = startTime;
  timeFromLastUpdateVentiladores = startTime - timeWhenLastUpdateVentiladores;

  if (timeFromLastUpdateVentiladores > timePerFrameVentiladores) {
    if (runVentiladores_1) {
      $ventiladores_1.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_1}.png`);
      if (frameNumberVentiladores_1 >= framesVentiladores) {
          frameNumberVentiladores_1 = 13;
          $ventiladores_1.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_1}.png`);
      } else {
          frameNumberVentiladores_1 = frameNumberVentiladores_1 + 1;
      }
    }
    if (runVentiladores_2) {
      $ventiladores_2.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_2}.png`);
      if (frameNumberVentiladores_2 >= framesVentiladores) {
          frameNumberVentiladores_2 = 13;
          $ventiladores_2.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_2}.png`);
      } else {
          frameNumberVentiladores_2 = frameNumberVentiladores_2 + 1;
      }
    }
    if (runVentiladores_3) {
      $ventiladores_3.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_3}.png`);
      if (frameNumberVentiladores_3 >= framesVentiladores) {
          frameNumberVentiladores_3 = 13;
          $ventiladores_3.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_3}.png`);
      } else {
          frameNumberVentiladores_3 = frameNumberVentiladores_3 + 1;
      }
    }
    if (runVentiladores_4) {
      $ventiladores_4.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_4}.png`);
      if (frameNumberVentiladores_4 >= framesVentiladores) {
          frameNumberVentiladores_4 = 13;
          $ventiladores_4.attr('src', pathVentiladores + `Ventiladores_${frameNumberVentiladores_4}.png`);
      } else {
          frameNumberVentiladores_4 = frameNumberVentiladores_4 + 1;
      }
    }
    if (runVent1_1) {
      $vent1_1.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_1}.png`);
      if (frameNumberVent1_1 >= totalFramesVent) {
          frameNumberVent1_1 = 0;
          $vent1_1.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_1}.png`);
      } else {
          frameNumberVent1_1 = frameNumberVent1_1 + 1;
      }
    }
    if (runVent1_2) {
      $vent1_2.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_2}.png`);
      if (frameNumberVent1_2 >= totalFramesVent) {
          frameNumberVent1_2 = 0;
          $vent1_2.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_2}.png`);
      } else {
          frameNumberVent1_2 = frameNumberVent1_2 + 1;
      }
    }
    if (runVent1_3) {
      $vent1_3.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_3}.png`);
      if (frameNumberVent1_3 >= totalFramesVent) {
          frameNumberVent1_3 = 0;
          $vent1_3.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_3}.png`);
      } else {
          frameNumberVent1_3 = frameNumberVent1_3 + 1;
      }
    }
    if (runVent1_4) {
      $vent1_4.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_4}.png`);
      if (frameNumberVent1_4 >= totalFramesVent) {
          frameNumberVent1_4 = 0;
          $vent1_4.attr('src', pathVentilador1 + `Ventilador1_${frameNumberVent1_4}.png`);
      } else {
          frameNumberVent1_4 = frameNumberVent1_4 + 1;
      }
    }
    if (runVent2_1) {
      $vent2_1.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_1}.png`);
      if (frameNumberVent2_1 >= totalFramesVent) {
          frameNumberVent2_1 = 0;
          $vent2_1.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_1}.png`);
      } else {
          frameNumberVent2_1 = frameNumberVent2_1 + 1;
      }
    }
    if (runVent2_2) {
      $vent2_2.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_2}.png`);
      if (frameNumberVent2_2 >= totalFramesVent) {
          frameNumberVent2_2 = 0;
          $vent2_2.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_2}.png`);
      } else {
          frameNumberVent2_2 = frameNumberVent2_2 + 1;
      }
    }
    if (runVent2_3) {
      $vent2_3.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_3}.png`);
      if (frameNumberVent2_3 >= totalFramesVent) {
          frameNumberVent2_3 = 0;
          $vent2_3.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_3}.png`);
      } else {
          frameNumberVent2_3 = frameNumberVent2_3 + 1;
      }
    }
    if (runVent2_4) {
      $vent2_4.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_4}.png`);
      if (frameNumberVent2_4 >= totalFramesVent) {
          frameNumberVent2_4 = 0;
          $vent2_4.attr('src', pathVentilador2 + `Ventilador2_${frameNumberVent2_4}.png`);
      } else {
          frameNumberVent2_4 = frameNumberVent2_4 + 1;
      }
    }

    timeWhenLastUpdateVentiladores = startTime;
  }

  if (!timeWhenLastUpdateRiego) timeWhenLastUpdateRiego = startTime;
  timeFromLastUpdateRiego = startTime - timeWhenLastUpdateRiego;

  if (timeFromLastUpdateRiego > timePerFrameRiego) {
    if (queryRiego_1 && !runRiego_1) {
      runRiego_1 = true;
      frameNumberRiego_1 = 0;
    }
    if (runRiego_1) {
      $riego_1.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego_1}.png`);
      if (frameNumberRiego_1 >= framesRiego-riegoVelocity) {
        runRiego_1 = false;
      } else {
        frameNumberRiego_1 = frameNumberRiego_1 + riegoVelocity;
      }
    }

    if (queryRiego_2 && !runRiego_2) {
      runRiego_2 = true;
      frameNumberRiego_2 = 0;
    };
    if (runRiego_2){
      $riego_2.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego_2}.png`);
      if (frameNumberRiego_2 >= framesRiego-riegoVelocity) {
        runRiego_2 = false;
      } else {
        frameNumberRiego_2 = frameNumberRiego_2 + riegoVelocity;
      }
    }

    if (queryRiego_3 && !runRiego_3) {
      runRiego_3 = true;
      frameNumberRiego_3 = 0;
    }
    if (runRiego_3){
      $riego_3.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego_3}.png`);
      if (frameNumberRiego_3 >= framesRiego-riegoVelocity) {
        runRiego_3 = false;
      } else {
        frameNumberRiego_3 = frameNumberRiego_3 + riegoVelocity;
      }
    }

    if (queryRiego_4 && !runRiego_4) {
      runRiego_4 = true;
      frameNumberRiego_4 = 0;
    }
    if (runRiego_4){
      $riego_4.attr('src', pathRiego + `ChorrosAgua_${frameNumberRiego_4}.png`);
      if (frameNumberRiego_4 >= framesRiego-riegoVelocity) {
        runRiego_4 = false;
      } else {
        frameNumberRiego_4 = frameNumberRiego_4 + riegoVelocity;
      }
    }
    timeWhenLastUpdateRiego = startTime;
  }

  if (!timeWhenLastUpdateMedTemp) timeWhenLastUpdateMedTemp = startTime;
  timeFromLastUpdateMedTemp = startTime - timeWhenLastUpdateMedTemp;

  if (timeFromLastUpdateMedTemp > timePerFrameMedidores) {
    if (frameNumberMedTemp_1 !== framesMedTemp_1){
      $medTemp_1.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp_1}.png`);
      if (frameNumberMedTemp_1 > framesMedTemp_1) {
        frameNumberMedTemp_1 = frameNumberMedTemp_1 - 1;
      } else {
        frameNumberMedTemp_1 = frameNumberMedTemp_1 + 1;
      }
    }

    if (frameNumberMedTemp_2 !== framesMedTemp_2){
      $medTemp_2.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp_2}.png`);
      if (frameNumberMedTemp_2 > framesMedTemp_2) {
        frameNumberMedTemp_2 = frameNumberMedTemp_2 - 1;
      } else {
        frameNumberMedTemp_2 = frameNumberMedTemp_2 + 1;
      }
    }

    if (frameNumberMedTemp_3 !== framesMedTemp_3){
      $medTemp_3.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp_3}.png`);
      if (frameNumberMedTemp_3 > framesMedTemp_3) {
        frameNumberMedTemp_3 = frameNumberMedTemp_3 - 1;
      } else {
        frameNumberMedTemp_3 = frameNumberMedTemp_3 + 1;
      }
    }

    if (frameNumberMedTemp_4 !== framesMedTemp_4){
      $medTemp_4.attr('src', pathMedTemp + `Medidor_Temp_${frameNumberMedTemp_4}.png`);
      if (frameNumberMedTemp_4 > framesMedTemp_4) {
        frameNumberMedTemp_4 = frameNumberMedTemp_4 - 1;
      } else {
        frameNumberMedTemp_4 = frameNumberMedTemp_4 + 1;
      }
    }

    timeWhenLastUpdateMedTemp = startTime;
  }

  if (!timeWhenLastUpdateMedHum) timeWhenLastUpdateMedHum = startTime;
  timeFromLastUpdateMedHum = startTime - timeWhenLastUpdateMedHum;

  if (timeFromLastUpdateMedHum > timePerFrameMedidores) {
    if (frameNumberMedHum_1 !== framesMedHum_1){
      $medHum_1.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum_1}.png`);
      if (frameNumberMedHum_1 > framesMedHum_1) {
        frameNumberMedHum_1 = frameNumberMedHum_1 - 1;
      } else {
        frameNumberMedHum_1 = frameNumberMedHum_1 + 1;
      }
    }

    if (frameNumberMedHum_2 !== framesMedHum_2){
      $medHum_2.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum_2}.png`);
      if (frameNumberMedHum_2 > framesMedHum_2) {
        frameNumberMedHum_2 = frameNumberMedHum_2 - 1;
      } else {
        frameNumberMedHum_2 = frameNumberMedHum_2 + 1;
      }
    }

    if (frameNumberMedHum_3 !== framesMedHum_3){
      $medHum_3.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum_3}.png`);
      if (frameNumberMedHum_3 > framesMedHum_3) {
        frameNumberMedHum_3 = frameNumberMedHum_3 - 1;
      } else {
        frameNumberMedHum_3 = frameNumberMedHum_3 + 1;
      }
    }

    if (frameNumberMedHum_4 !== framesMedHum_4){
      $medHum_4.attr('src', pathMedHum + `Medidor_Humedad_${frameNumberMedHum_4}.png`);
      if (frameNumberMedHum_4 > framesMedHum_4) {
        frameNumberMedHum_4 = frameNumberMedHum_4 - 1;
      } else {
        frameNumberMedHum_4 = frameNumberMedHum_4 + 1;
      }
    }

    timeWhenLastUpdateMedHum = startTime;
  }

  if (!timeWhenLastUpdateMedCO2) timeWhenLastUpdateMedCO2 = startTime;
  timeFromLastUpdateMedCO2 = startTime - timeWhenLastUpdateMedCO2;

  if (timeFromLastUpdateMedCO2 > timePerFrameMedidores) {
    if (frameNumberMedCO2_1 !== framesMedCO2_1){
      $medCO2_1.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_1}.png`);
      if (frameNumberMedCO2_1 > framesMedCO2_1) {
        frameNumberMedCO2_1 = frameNumberMedCO2_1 - 1;
      } else {
        frameNumberMedCO2_1 = frameNumberMedCO2_1 + 1;
      }
    }

    if (frameNumberMedCO2_2 !== framesMedCO2_2){
      $medCO2_2.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_2}.png`);
      if (frameNumberMedCO2_2 > framesMedCO2_2) {
        frameNumberMedCO2_2 = frameNumberMedCO2_2 - 1;
      } else {
        frameNumberMedCO2_2 = frameNumberMedCO2_2 + 1;
      }
    }

    if (frameNumberMedCO2_3 !== framesMedCO2_3){
      $medCO2_3.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_3}.png`);
      if (frameNumberMedCO2_3 > framesMedCO2_3) {
        frameNumberMedCO2_3 = frameNumberMedCO2_3 - 1;
      } else {
        frameNumberMedCO2_3 = frameNumberMedCO2_3 + 1;
      }
    }

    if (frameNumberMedCO2_4 !== framesMedCO2_4){
      $medCO2_4.attr('src', pathMedCO2 + `Medidor_CO2_${frameNumberMedCO2_4}.png`);
      if (frameNumberMedCO2_4 > framesMedCO2_4) {
        frameNumberMedCO2_4 = frameNumberMedCO2_4 - 1;
      } else {
        frameNumberMedCO2_4 = frameNumberMedCO2_4 + 1;
      }
    }

    timeWhenLastUpdateMedCO2 = startTime;
  }

  if (!timeWhenLastUpdateRec) timeWhenLastUpdateRec = startTime;
  timeFromLastUpdateRec = startTime - timeWhenLastUpdateRec;

  if (timeFromLastUpdateRec > timePerFrameRectangulo) {
    if(frameNumberRec1_1 !== framesRec1_1) {
      $Rec1_1.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1_1}.png`);
      if (frameNumberRec1_1 > framesRec1_1) {
          frameNumberRec1_1 = frameNumberRec1_1 - 1;
      } else {
          frameNumberRec1_1 = frameNumberRec1_1 + 1;
      }
    }

    if(frameNumberRec2_1 !== framesRec2_1) {
      $Rec2_1.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2_1}.png`);
      if (frameNumberRec2_1 > framesRec2_1) {
          frameNumberRec2_1 = frameNumberRec2_1 - 1;
      } else {
          frameNumberRec2_1 = frameNumberRec2_1 + 1;
      }
    }

    if(frameNumberRec3_1 !== framesRec3_1) {
      $Rec3_1.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3_1}.png`);
      if (frameNumberRec3_1 > framesRec3_1) {
          frameNumberRec3_1 = frameNumberRec3_1 - 1;
      } else {
          frameNumberRec3_1 = frameNumberRec3_1 + 1;
      }
    }

    if(frameNumberRec4_1 !== framesRec4_1) {
      $Rec4_1.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4_1}.png`);
      if (frameNumberRec4_1 > framesRec4_1) {
          frameNumberRec4_1 = frameNumberRec4_1 - 1;
      } else {
          frameNumberRec4_1 = frameNumberRec4_1 + 1;
      }
    }

    if(frameNumberRec5_1 !== framesRec5_1) {
      $Rec5_1.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5_1}.png`);
      if (frameNumberRec5_1 > framesRec5_1) {
          frameNumberRec5_1 = frameNumberRec5_1 - 1;
      } else {
          frameNumberRec5_1 = frameNumberRec5_1 + 1;
      }
    }

    if(frameNumberRec6_1 !== framesRec6_1) {
      $Rec6_1.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6_1}.png`);
      if (frameNumberRec6_1 > framesRec6_1) {
          frameNumberRec6_1 = frameNumberRec6_1 - 1;
      } else {
          frameNumberRec6_1 = frameNumberRec6_1 + 1;
      }
    }

    if(frameNumberRec7_1 !== framesRec7_1) {
      $Rec7_1.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7_1}.png`);
      if (frameNumberRec7_1 > framesRec7_1) {
          frameNumberRec7_1 = frameNumberRec7_1 - 1;
      } else {
          frameNumberRec7_1 = frameNumberRec7_1 + 1;
      }
    }

    if(frameNumberRec8_1 !== framesRec8_1) {
      $Rec8_1.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8_1}.png`);
      if (frameNumberRec8_1 > framesRec8_1) {
          frameNumberRec8_1 = frameNumberRec8_1 - 1;
      } else {
          frameNumberRec8_1 = frameNumberRec8_1 + 1;
      }
    }

    if(frameNumberRec1_2 !== framesRec1_2) {
      $Rec1_2.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1_2}.png`);
      if (frameNumberRec1_2 > framesRec1_2) {
          frameNumberRec1_2 = frameNumberRec1_2 - 1;
      } else {
          frameNumberRec1_2 = frameNumberRec1_2 + 1;
      }
    }

    if(frameNumberRec2_2 !== framesRec2_2) {
      $Rec2_2.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2_2}.png`);
      if (frameNumberRec2_2 > framesRec2_2) {
          frameNumberRec2_2 = frameNumberRec2_2 - 1;
      } else {
          frameNumberRec2_2 = frameNumberRec2_2 + 1;
      }
    }

    if(frameNumberRec3_2 !== framesRec3_2) {
      $Rec3_2.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3_2}.png`);
      if (frameNumberRec3_2 > framesRec3_2) {
          frameNumberRec3_2 = frameNumberRec3_2 - 1;
      } else {
          frameNumberRec3_2 = frameNumberRec3_2 + 1;
      }
    }

    if(frameNumberRec4_2 !== framesRec4_2) {
      $Rec4_2.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4_2}.png`);
      if (frameNumberRec4_2 > framesRec4_2) {
          frameNumberRec4_2 = frameNumberRec4_2 - 1;
      } else {
          frameNumberRec4_2 = frameNumberRec4_2 + 1;
      }
    }

    if(frameNumberRec5_2 !== framesRec5_2) {
      $Rec5_2.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5_2}.png`);
      if (frameNumberRec5_2 > framesRec5_2) {
          frameNumberRec5_2 = frameNumberRec5_2 - 1;
      } else {
          frameNumberRec5_2 = frameNumberRec5_2 + 1;
      }
    }

    if(frameNumberRec6_2 !== framesRec6_2) {
      $Rec6_2.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6_2}.png`);
      if (frameNumberRec6_2 > framesRec6_2) {
          frameNumberRec6_2 = frameNumberRec6_2 - 1;
      } else {
          frameNumberRec6_2 = frameNumberRec6_2 + 1;
      }
    }

    if(frameNumberRec7_2 !== framesRec7_2) {
      $Rec7_2.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7_2}.png`);
      if (frameNumberRec7_2 > framesRec7_2) {
          frameNumberRec7_2 = frameNumberRec7_2 - 1;
      } else {
          frameNumberRec7_2 = frameNumberRec7_2 + 1;
      }
    }

    if(frameNumberRec8_2 !== framesRec8_2) {
      $Rec8_2.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8_2}.png`);
      if (frameNumberRec8_2 > framesRec8_2) {
          frameNumberRec8_2 = frameNumberRec8_2 - 1;
      } else {
          frameNumberRec8_2 = frameNumberRec8_2 + 1;
      }
    }

    if(frameNumberRec1_3 !== framesRec1_3) {
      $Rec1_3.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1_3}.png`);
      if (frameNumberRec1_3 > framesRec1_3) {
          frameNumberRec1_3 = frameNumberRec1_3 - 1;
      } else {
          frameNumberRec1_3 = frameNumberRec1_3 + 1;
      }
    }

    if(frameNumberRec2_3 !== framesRec2_3) {
      $Rec2_3.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2_3}.png`);
      if (frameNumberRec2_3 > framesRec2_3) {
          frameNumberRec2_3 = frameNumberRec2_3 - 1;
      } else {
          frameNumberRec2_3 = frameNumberRec2_3 + 1;
      }
    }

    if(frameNumberRec3_3 !== framesRec3_3) {
      $Rec3_3.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3_3}.png`);
      if (frameNumberRec3_3 > framesRec3_3) {
          frameNumberRec3_3 = frameNumberRec3_3 - 1;
      } else {
          frameNumberRec3_3 = frameNumberRec3_3 + 1;
      }
    }

    if(frameNumberRec4_3 !== framesRec4_3) {
      $Rec4_3.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4_3}.png`);
      if (frameNumberRec4_3 > framesRec4_3) {
          frameNumberRec4_3 = frameNumberRec4_3 - 1;
      } else {
          frameNumberRec4_3 = frameNumberRec4_3 + 1;
      }
    }

    if(frameNumberRec5_3 !== framesRec5_3) {
      $Rec5_3.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5_3}.png`);
      if (frameNumberRec5_3 > framesRec5_3) {
          frameNumberRec5_3 = frameNumberRec5_3 - 1;
      } else {
          frameNumberRec5_3 = frameNumberRec5_3 + 1;
      }
    }

    if(frameNumberRec6_3 !== framesRec6_3) {
      $Rec6_3.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6_3}.png`);
      if (frameNumberRec6_3 > framesRec6_3) {
          frameNumberRec6_3 = frameNumberRec6_3 - 1;
      } else {
          frameNumberRec6_3 = frameNumberRec6_3 + 1;
      }
    }

    if(frameNumberRec7_3 !== framesRec7_3) {
      $Rec7_3.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7_3}.png`);
      if (frameNumberRec7_3 > framesRec7_3) {
          frameNumberRec7_3 = frameNumberRec7_3 - 1;
      } else {
          frameNumberRec7_3 = frameNumberRec7_3 + 1;
      }
    }

    if(frameNumberRec8_3 !== framesRec8_3) {
      $Rec8_3.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8_3}.png`);
      if (frameNumberRec8_3 > framesRec8_3) {
          frameNumberRec8_3 = frameNumberRec8_3 - 1;
      } else {
          frameNumberRec8_3 = frameNumberRec8_3 + 1;
      }
    }

    if(frameNumberRec1_4 !== framesRec1_4) {
      $Rec1_4.attr('src', pathRectangulos + `1/Rectangulo1_${frameNumberRec1_4}.png`);
      if (frameNumberRec1_4 > framesRec1_4) {
          frameNumberRec1_4 = frameNumberRec1_4 - 1;
      } else {
          frameNumberRec1_4 = frameNumberRec1_4 + 1;
      }
    }

    if(frameNumberRec2_4 !== framesRec2_4) {
      $Rec2_4.attr('src', pathRectangulos + `2/Rectangulo2_${frameNumberRec2_4}.png`);
      if (frameNumberRec2_4 > framesRec2_4) {
          frameNumberRec2_4 = frameNumberRec2_4 - 1;
      } else {
          frameNumberRec2_4 = frameNumberRec2_4 + 1;
      }
    }

    if(frameNumberRec3_4 !== framesRec3_4) {
      $Rec3_4.attr('src', pathRectangulos + `3/Rectangulo3_${frameNumberRec3_4}.png`);
      if (frameNumberRec3_4 > framesRec3_4) {
          frameNumberRec3_4 = frameNumberRec3_4 - 1;
      } else {
          frameNumberRec3_4 = frameNumberRec3_4 + 1;
      }
    }

    if(frameNumberRec4_4 !== framesRec4_4) {
      $Rec4_4.attr('src', pathRectangulos + `4/Rectangulo4_${frameNumberRec4_4}.png`);
      if (frameNumberRec4_4 > framesRec4_4) {
          frameNumberRec4_4 = frameNumberRec4_4 - 1;
      } else {
          frameNumberRec4_4 = frameNumberRec4_4 + 1;
      }
    }

    if(frameNumberRec5_4 !== framesRec5_4) {
      $Rec5_4.attr('src', pathRectangulos + `5/Rectangulo5_${frameNumberRec5_4}.png`);
      if (frameNumberRec5_4 > framesRec5_4) {
          frameNumberRec5_4 = frameNumberRec5_4 - 1;
      } else {
          frameNumberRec5_4 = frameNumberRec5_4 + 1;
      }
    }

    if(frameNumberRec6_4 !== framesRec6_4) {
      $Rec6_4.attr('src', pathRectangulos + `6/Rectangulo6_${frameNumberRec6_4}.png`);
      if (frameNumberRec6_4 > framesRec6_4) {
          frameNumberRec6_4 = frameNumberRec6_4 - 1;
      } else {
          frameNumberRec6_4 = frameNumberRec6_4 + 1;
      }
    }

    if(frameNumberRec7_4 !== framesRec7_4) {
      $Rec7_4.attr('src', pathRectangulos + `7/Rectangulo7_${frameNumberRec7_4}.png`);
      if (frameNumberRec7_4 > framesRec7_4) {
          frameNumberRec7_4 = frameNumberRec7_4 - 1;
      } else {
          frameNumberRec7_4 = frameNumberRec7_4 + 1;
      }
    }

    if(frameNumberRec8_4 !== framesRec8_4) {
      $Rec8_4.attr('src', pathRectangulos + `8/Rectangulo8_${frameNumberRec8_4}.png`);
      if (frameNumberRec8_4 > framesRec8_4) {
          frameNumberRec8_4 = frameNumberRec8_4 - 1;
      } else {
          frameNumberRec8_4 = frameNumberRec8_4 + 1;
      }
    }

    timeWhenLastUpdateRec = startTime;
  }

  if (!timeWhenLastUpdateRecirculado) timeWhenLastUpdateRecirculado = startTime;
  timeFromLastUpdateRecirculado = startTime - timeWhenLastUpdateRecirculado;

  if (timeFromLastUpdateRecirculado > timePerFrameRecirculado) {
    if (showRecirculado) {
      if(framesNumberNivelT1 !== framesNivelT1) {
        $nivelT1.attr('src', pathNiveles + `Nivel_${framesNumberNivelT1}.png`);
        if (framesNumberNivelT1 > framesNivelT1) {
            framesNumberNivelT1 = framesNumberNivelT1 - 1;
        } else {
            framesNumberNivelT1 = framesNumberNivelT1 + 1;
        }
      } else if(showRecirculadoStage===7) {
        showRecirculadoStage += 1;
        recirculationIndicator(1, 0);
        recirculationIndicator(2, 0);
        recirculationIndicator(3, 0);
        recirculationIndicator(4, 0);
        recirculationIndicator(5, 0);
        emptyRecirculationEntrada();
      } else if(showRecirculadoStage===19) {
        showRecirculadoStage += 1;
        emptyRecirculationSalida();
      }

      if(framesNumberNivelT2 !== framesNivelT2) {
        $nivelT2.attr('src', pathNiveles + `Nivel_${framesNumberNivelT2}.png`);
        if (framesNumberNivelT2 > framesNivelT2) {
            framesNumberNivelT2 = framesNumberNivelT2 - 1;
        } else {
            framesNumberNivelT2 = framesNumberNivelT2 + 1;
        }
      } else if (showRecirculadoStage===6) {
        showRecirculadoStage += 1;
        levelRecirculation(1, 180);
        levelRecirculation(6, 80);
      }

      if(framesNumberNivelT3 !== framesNivelT3) {
        $nivelT3.attr('src', pathNiveles + `Nivel_${framesNumberNivelT3}.png`);
        if (framesNumberNivelT3 > framesNivelT3) {
            framesNumberNivelT3 = framesNumberNivelT3 - 1;
        } else {
            framesNumberNivelT3 = framesNumberNivelT3 + 1;
        }
      } else if (showRecirculadoStage===5) {
        showRecirculadoStage += 1;

        levelRecirculation(2, 180);
        levelRecirculation(6, 100);
      }

      if(framesNumberNivelT4 !== framesNivelT4) {
        $nivelT4.attr('src', pathNiveles + `Nivel_${framesNumberNivelT4}.png`);
        if (framesNumberNivelT4 > framesNivelT4) {
            framesNumberNivelT4 = framesNumberNivelT4 - 1;
        } else {
            framesNumberNivelT4 = framesNumberNivelT4 + 1;
        }
      } else if (showRecirculadoStage===4) {
        showRecirculadoStage += 1;
        levelRecirculation(3, 180);
        levelRecirculation(6, 120);
      }

      if(framesNumberNivelT5 !== framesNivelT5) {
        $nivelT5.attr('src', pathNiveles + `Nivel_${framesNumberNivelT5}.png`);
        if (framesNumberNivelT5 > framesNivelT5) {
            framesNumberNivelT5 = framesNumberNivelT5 - 1;
        } else {
            framesNumberNivelT5 = framesNumberNivelT5 + 1;
        }
      } else if (showRecirculadoStage===3) {
        showRecirculadoStage += 1;
        levelRecirculation(4, 180);
        levelRecirculation(6, 140);
      }

      if(framesNumberNivelTA !== framesNivelTA) {
        $nivelTA.attr('src', pathNiveles + `Nivel_${framesNumberNivelTA}.png`);
        if (framesNumberNivelTA > framesNivelTA) {
            framesNumberNivelTA = framesNumberNivelTA - 1;
        } else {
            framesNumberNivelTA = framesNumberNivelTA + 1;
        }
      } else if(showRecirculadoStage===1){
        showRecirculadoStage += 1;
        fillRecirculationEntrada(1);
        levelRecirculation(6, 160);
        recirculationIndicator(1, 1);
        recirculationIndicator(2, 1);
        recirculationIndicator(3, 1);
        recirculationIndicator(4, 1);
        recirculationIndicator(5, 1);
      }

      if(framesNumberNivelTB !== framesNivelTB) {
        $nivelTB.attr('src', pathNiveles + `Nivel_${framesNumberNivelTB}.png`);
        if (framesNumberNivelTB > framesNivelTB) {
            framesNumberNivelTB = framesNumberNivelTB - 1;
        } else {
            framesNumberNivelTB = framesNumberNivelTB + 1;
        }
      } else if(showRecirculadoStage===11) {
        showRecirculadoStage += 1;
        recirculationIndicator(5, 0);
        emptyRecirculationSalida();
      } else if(showRecirculadoStage===15) {
        showRecirculadoStage += 1;
        emptySMaker(false);
      }

      if(actTank1===1 || actTank1===2) {
        let actURL = '';
        if(actTank1===1){
           actURL = `${pathFocosVerdes}${framesFocoT1}.png`;
        } else if(actTank1===2){
           actURL = `${pathFocosRojos}${framesFocoT1}.png`;
        }
        $focoT1.attr('src', actURL);
        if(framesFocoT1 >= totalFrameFocoTanque) {
          framesFocoT1 = 0;
        } else {
          framesFocoT1 = framesFocoT1 + 1;
        }
      }

      if(actTank2===1 || actTank2===2) {
        let actURL = '';
        if(actTank2===1){
           actURL = `${pathFocosVerdes}${framesFocoT2}.png`;
        } else if(actTank2===2){
           actURL = `${pathFocosRojos}${framesFocoT2}.png`;
        }
        $focoT2.attr('src', actURL);
        if(framesFocoT2 >= totalFrameFocoTanque) {
          framesFocoT2 = 0;
        } else {
          framesFocoT2 = framesFocoT2 + 1;
        }
      }

      if(actTank3===1 || actTank3===2) {
        let actURL = '';
        if(actTank3===1){
           actURL = `${pathFocosVerdes}${framesFocoT3}.png`;
        } else if(actTank3===2){
           actURL = `${pathFocosRojos}${framesFocoT3}.png`;
        }
        $focoT3.attr('src', actURL);
        if(framesFocoT3 >= totalFrameFocoTanque) {
          framesFocoT3 = 0;
        } else {
          framesFocoT3 = framesFocoT3 + 1;
        }
      }

      if(actTank4===1 || actTank4===2) {
        let actURL = '';
        if(actTank4===1){
           actURL = `${pathFocosVerdes}${framesFocoT4}.png`;
        } else if(actTank4===2){
           actURL = `${pathFocosRojos}${framesFocoT4}.png`;
        }
        $focoT4.attr('src', actURL);
        if(framesFocoT4 >= totalFrameFocoTanque) {
          framesFocoT4 = 0;
        } else {
          framesFocoT4 = framesFocoT4 + 1;
        }
      }

      if(actTank5===1 || actTank5===2) {
        let actURL = '';
        if(actTank5===1){
           actURL = `${pathFocosVerdes}${framesFocoT5}.png`;
        } else if(actTank5===2){
           actURL = `${pathFocosRojos}${framesFocoT5}.png`;
        }
        $focoT5.attr('src', actURL);
        if(framesFocoT5 >= totalFrameFocoTanque) {
          framesFocoT5 = 0;
        } else {
          framesFocoT5 = framesFocoT5 + 1;
        }
      }

      if(RecirculadoEntrada){
        if(framesEntradaRecirculado < totalFrameLineasAgua49){
          $entradaRecirculado.attr('src', `${pathEntradaRecirculado}${framesEntradaRecirculado}.png`);
          framesEntradaRecirculado = framesEntradaRecirculado + 1;
        } else {
          RecirculadoEntrada = false;
          if (showRecirculadoStage===2) {
            showRecirculadoStage += 1;
            levelRecirculation(5, 180);
            levelRecirculation(6, 160);
          } else if(showRecirculadoStage===8) {
            showRecirculadoStage += 1;
            recirculationIndicator(5, 2);
            fillRecirculationSalida();
          }
        }
      }

      if(RecirculadoSalida){
        if(framesSalidaRecirculado < totalFrameLineasAgua72){
          $salidaRecirculado.attr('src', `${pathSalidaRecirculado}${framesSalidaRecirculado}.png`);
          framesSalidaRecirculado = framesSalidaRecirculado + 1;
          if(framesSalidaRecirculado===36){
              RecirculadoSalida = false;
              if(showRecirculadoStage===9) {
                showRecirculadoStage += 1;
                fillSMaker(true);
              } else if(showRecirculadoStage===17) {
                showRecirculadoStage += 1;
                recirculationIndicator(1, 2);
                fillCompressor(true);
              }
          }
        } else {
          RecirculadoSalida = false;
          if(showRecirculadoStage===12) {
            showRecirculadoStage += 1;
            fillSMaker(false);
          } else if(showRecirculadoStage===20) {
            showRecirculadoStage += 1;
            fillCompressor(false);
            recirculationIndicator(1, 0);
          }
        }
      }

      if(RecirculadoEntradaSMaker){
        if(framesEntradaSMaker <= totalFrameLineasAgua72){
          $entradaSMaker.attr('src', `${pathEntradaSMaker}${framesEntradaSMaker}.png`);
          framesEntradaSMaker = framesEntradaSMaker + 1;
          if(framesEntradaSMaker===36){
              RecirculadoEntradaSMaker = false;
              if(showRecirculadoStage===10) {
                showRecirculadoStage += 1;
                levelRecirculation(7, 180);
                levelRecirculation(5, 30);
              }
          }
        } else {
          RecirculadoEntradaSMaker = false;
          if(showRecirculadoStage===13) {
            showRecirculadoStage += 1;
            emptySMaker(true);
          }
        }
      }

      if(RecirculadoSalidaSMaker){
        if(framesSalidaSMaker <= totalFrameLineasAgua58){
          $salidaSMaker.attr('src', `${pathSalidaSMaker}${framesSalidaSMaker}.png`);
          framesSalidaSMaker = framesSalidaSMaker + 1;
          if(framesSalidaSMaker===28){
              RecirculadoSalidaSMaker = false;
              if(showRecirculadoStage===14) {
                showRecirculadoStage += 1;
                levelRecirculation(7, 20);
              }
          }
        } else {
          RecirculadoSalidaSMaker = false;
          if(showRecirculadoStage===16) {
            showRecirculadoStage += 1;
            fillRecirculationSalida(1);
          }
        }
      }

      if(RecirculadoEntradaCompresor){
        if(framesEntradaCompresor <= totalFrameLineasAgua72){
          $entradaCompresor.attr('src', `${pathEntradaCompresor}${framesEntradaCompresor}.png`);
          framesEntradaCompresor = framesEntradaCompresor + 1;
          if(framesEntradaCompresor===36){
              RecirculadoEntradaCompresor = false;
              if(showRecirculadoStage===18) {
                showRecirculadoStage += 1;
                levelRecirculation(1, 30);
              }
          }
        } else {
          RecirculadoEntradaCompresor = false;
          if(showRecirculadoStage===21) {
            showRecirculadoStage += 1;
            showRecirculado = false;
          }
        }
      }
    } else {
      if(framesNumberNivelT1 !== framesNivelT1) {
        $nivelT1.attr('src', pathNiveles + `Nivel_${framesNumberNivelT1}.png`);
        if (framesNumberNivelT1 > framesNivelT1) {
            framesNumberNivelT1 = framesNumberNivelT1 - 1;
        } else {
            framesNumberNivelT1 = framesNumberNivelT1 + 1;
        }
      }

      if(framesNumberNivelT2 !== framesNivelT2) {
        $nivelT2.attr('src', pathNiveles + `Nivel_${framesNumberNivelT2}.png`);
        if (framesNumberNivelT2 > framesNivelT2) {
            framesNumberNivelT2 = framesNumberNivelT2 - 1;
        } else {
            framesNumberNivelT2 = framesNumberNivelT2 + 1;
        }
      }

      if(framesNumberNivelT3 !== framesNivelT3) {
        $nivelT3.attr('src', pathNiveles + `Nivel_${framesNumberNivelT3}.png`);
        if (framesNumberNivelT3 > framesNivelT3) {
            framesNumberNivelT3 = framesNumberNivelT3 - 1;
        } else {
            framesNumberNivelT3 = framesNumberNivelT3 + 1;
        }
      }

      if(framesNumberNivelT4 !== framesNivelT4) {
        $nivelT4.attr('src', pathNiveles + `Nivel_${framesNumberNivelT4}.png`);
        if (framesNumberNivelT4 > framesNivelT4) {
            framesNumberNivelT4 = framesNumberNivelT4 - 1;
        } else {
            framesNumberNivelT4 = framesNumberNivelT4 + 1;
        }
      }

      if(framesNumberNivelT5 !== framesNivelT5) {
        $nivelT5.attr('src', pathNiveles + `Nivel_${framesNumberNivelT5}.png`);
        if (framesNumberNivelT5 > framesNivelT5) {
            framesNumberNivelT5 = framesNumberNivelT5 - 1;
        } else {
            framesNumberNivelT5 = framesNumberNivelT5 + 1;
        }
      }

      if(framesNumberNivelTA !== framesNivelTA) {
        $nivelTA.attr('src', pathNiveles + `Nivel_${framesNumberNivelTA}.png`);
        if (framesNumberNivelTA > framesNivelTA) {
            framesNumberNivelTA = framesNumberNivelTA - 1;
        } else {
            framesNumberNivelTA = framesNumberNivelTA + 1;
        }
      }

      if(framesNumberNivelTB !== framesNivelTB) {
        $nivelTB.attr('src', pathNiveles + `Nivel_${framesNumberNivelTB}.png`);
        if (framesNumberNivelTB > framesNivelTB) {
            framesNumberNivelTB = framesNumberNivelTB - 1;
        } else {
            framesNumberNivelTB = framesNumberNivelTB + 1;
        }
      }

      if(actTank1===1 || actTank1===2) {
        let actURL = '';
        if(actTank1===1){
           actURL = `${pathFocosVerdes}${framesFocoT1}.png`;
        } else if(actTank1===2){
           actURL = `${pathFocosRojos}${framesFocoT1}.png`;
        }
        $focoT1.attr('src', actURL);
        if(framesFocoT1 >= totalFrameFocoTanque) {
          framesFocoT1 = 0;
        } else {
          framesFocoT1 = framesFocoT1 + 1;
        }
      }

      if(actTank2===1 || actTank2===2) {
        let actURL = '';
        if(actTank2===1){
           actURL = `${pathFocosVerdes}${framesFocoT2}.png`;
        } else if(actTank2===2){
           actURL = `${pathFocosRojos}${framesFocoT2}.png`;
        }
        $focoT2.attr('src', actURL);
        if(framesFocoT2 >= totalFrameFocoTanque) {
          framesFocoT2 = 0;
        } else {
          framesFocoT2 = framesFocoT2 + 1;
        }
      }

      if(actTank3===1 || actTank3===2) {
        let actURL = '';
        if(actTank3===1){
           actURL = `${pathFocosVerdes}${framesFocoT3}.png`;
        } else if(actTank3===2){
           actURL = `${pathFocosRojos}${framesFocoT3}.png`;
        }
        $focoT3.attr('src', actURL);
        if(framesFocoT3 >= totalFrameFocoTanque) {
          framesFocoT3 = 0;
        } else {
          framesFocoT3 = framesFocoT3 + 1;
        }
      }

      if(actTank4===1 || actTank4===2) {
        let actURL = '';
        if(actTank4===1){
           actURL = `${pathFocosVerdes}${framesFocoT4}.png`;
        } else if(actTank4===2){
           actURL = `${pathFocosRojos}${framesFocoT4}.png`;
        }
        $focoT4.attr('src', actURL);
        if(framesFocoT4 >= totalFrameFocoTanque) {
          framesFocoT4 = 0;
        } else {
          framesFocoT4 = framesFocoT4 + 1;
        }
      }

      if(actTank5===1 || actTank5===2) {
        let actURL = '';
        if(actTank5===1){
           actURL = `${pathFocosVerdes}${framesFocoT5}.png`;
        } else if(actTank5===2){
           actURL = `${pathFocosRojos}${framesFocoT5}.png`;
        }
        $focoT5.attr('src', actURL);
        if(framesFocoT5 >= totalFrameFocoTanque) {
          framesFocoT5 = 0;
        } else {
          framesFocoT5 = framesFocoT5 + 1;
        }
      }

      if(RecirculadoEntrada){
        if(framesEntradaRecirculado < totalFrameLineasAgua49){
          $entradaRecirculado.attr('src', `${pathEntradaRecirculado}${framesEntradaRecirculado}.png`);
          framesEntradaRecirculado = framesEntradaRecirculado + 1;
        } else {
          RecirculadoEntrada = false;
        }
      }

      if(RecirculadoSalida){
        if(framesSalidaRecirculado < totalFrameLineasAgua72){
          $salidaRecirculado.attr('src', `${pathSalidaRecirculado}${framesSalidaRecirculado}.png`);
          framesSalidaRecirculado = framesSalidaRecirculado + 1;
          if(framesSalidaRecirculado===36){
              RecirculadoSalida = false;
          }
        } else {
          RecirculadoSalida = false;
        }
      }

      if(RecirculadoEntradaSMaker){
        if(framesEntradaSMaker <= totalFrameLineasAgua72){
          $entradaSMaker.attr('src', `${pathEntradaSMaker}${framesEntradaSMaker}.png`);
          framesEntradaSMaker = framesEntradaSMaker + 1;
          if(framesEntradaSMaker===36){
              RecirculadoEntradaSMaker = false;
          }
        } else {
          RecirculadoEntradaSMaker = false;
        }
      }

      if(RecirculadoSalidaSMaker){
        if(framesSalidaSMaker <= totalFrameLineasAgua58){
          $salidaSMaker.attr('src', `${pathSalidaSMaker}${framesSalidaSMaker}.png`);
          framesSalidaSMaker = framesSalidaSMaker + 1;
          if(framesSalidaSMaker===28){
              RecirculadoSalidaSMaker = false;
          }
        } else {
          RecirculadoSalidaSMaker = false;
        }
      }

      if(RecirculadoEntradaCompresor){
        if(framesEntradaCompresor <= totalFrameLineasAgua72){
          $entradaCompresor.attr('src', `${pathEntradaCompresor}${framesEntradaCompresor}.png`);
          framesEntradaCompresor = framesEntradaCompresor + 1;
          if(framesEntradaCompresor===36){
              RecirculadoEntradaCompresor = false;
          }
        } else {
          RecirculadoEntradaCompresor = false;
        }
      }
    }
    timeWhenLastUpdateRecirculado = startTime;
  }


  if (!timeWhenLastUpdateCompresor) timeWhenLastUpdateCompresor = startTime;
  timeFromLastUpdateCompresor = startTime - timeWhenLastUpdateCompresor;

  if (timeFromLastUpdateCompresor > timePerFrameCompresor) {
    if (showCompresor) {
      if (runCompresor) {
        $compresor.attr('src', `${pathCompresor}${framesCompresor}.png`);
        if (framesCompresor >= totalFrameCompresor) {
            framesCompresor = 0;
        } else {
            framesCompresor = framesCompresor + 1;
        }
      }

      if (framesNumberManometroA !== framesManometroA){
        $manometroA.attr('src', `${pathManometroA}${framesNumberManometroA}.png`);
        if (framesNumberManometroA > framesManometroA) {
          framesNumberManometroA = framesNumberManometroA - 1;
        } else {
          framesNumberManometroA = framesNumberManometroA + 1;
        }
      } else if (showCompresorStage===3){
        showCompresorStage += 1;
        runCompresor = false;
        requestSalidaTanque(true, 'A');
      }

      if (framesNumberManometroB !== framesManometroB){
        $manometroB.attr('src', `${pathManometroB}${framesNumberManometroB}.png`);
        if (framesNumberManometroB > framesManometroB) {
          framesNumberManometroB = framesNumberManometroB - 1;
        } else {
          framesNumberManometroB = framesNumberManometroB + 1;
        }
      } else if (showCompresorStage===9){
        showCompresorStage += 1;
        runCompresor = false;
        requestSalidaTanque(true, 'B');
      }

      if(framesNumberNivelA !== framesNivelA) {
        $nivelA.attr('src', `${pathNivelA}${framesNumberNivelA}.png`);
        if (framesNumberNivelA > framesNivelA) {
            framesNumberNivelA = framesNumberNivelA - 1;
        } else {
            framesNumberNivelA = framesNumberNivelA + 1;
        }
      } else if(showCompresorStage===2){
        showCompresorStage += 1;
        runCompresor = true;
        requestPressure(135, 'A');
        requestEntradaTanque(false, 'A');
      } else if (showCompresorStage===5){
        showCompresorStage += 1;
        requestSalidaTanque(false, 'A');
      }

      if(framesNumberNivelB !== framesNivelB) {
        $nivelB.attr('src', `${pathNivelB}${framesNumberNivelB}.png`);
        if (framesNumberNivelB > framesNivelB) {
            framesNumberNivelB = framesNumberNivelB - 1;
        } else {
            framesNumberNivelB = framesNumberNivelB + 1;
        }
      } else if (showCompresorStage===8){
        showCompresorStage += 1;
        runCompresor = true;
        requestPressure(135, 'B');
        requestEntradaTanque(false, 'B');
      } else if (showCompresorStage===11){
        showCompresorStage += 1;
        showCompresor = false;
        requestSalidaTanque(false, 'B');
      }

      if(EntradaTanqueA){
        if(framesEntradaA <= totalFrameEntradaCompresor){
          $entradaA.attr('src', `${pathEntradaA}${framesEntradaA}.png`);
          framesEntradaA = framesEntradaA + 1;
          if(framesEntradaA===60){
              EntradaTanqueA = false;
              if(showCompresorStage===1){
                showCompresorStage += 1;
                requestLevel(130, 'A');
              }
          }
        } else {
          EntradaTanqueA = false;
        }
      }

      if(EntradaTanqueB){
        if(framesEntradaB <= totalFrameEntradaCompresor){
          $entradaB.attr('src', `${pathEntradaB}${framesEntradaB}.png`);
          framesEntradaB = framesEntradaB + 1;
          if(framesEntradaB===60){
              EntradaTanqueB = false;
              if (showCompresorStage===7){
                showCompresorStage += 1;
                requestLevel(100, 'B');
              }
          }
        } else {
          EntradaTanqueB = false;
        }
      }

      if(SalidaTanqueA){
        if(framesSalidaA <= totalFrameSalidaCompresor){
          $salidaA.attr('src', `${pathSalidaA}${framesSalidaA}.png`);
          framesSalidaA = framesSalidaA + 1;
          if(framesSalidaA===73){
              SalidaTanqueA = false;
              if (showCompresorStage===4){
                showCompresorStage += 1;
                runCompresor = false;
                requestLevel(25, 'A');
                requestPressure(30, 'A');
              }
          }
        } else {
          SalidaTanqueA = false;
          if (showCompresorStage===6){
            showCompresorStage += 1;
            requestEntradaTanque(true, 'B');
          }
        }
      }

      if(SalidaTanqueB){
        if(framesSalidaB <= totalFrameSalidaCompresor){
          $salidaB.attr('src', `${pathSalidaB}${framesSalidaB}.png`);
          framesSalidaB = framesSalidaB + 1;
          if(framesSalidaB===73){
              SalidaTanqueB = false;
              if (showCompresorStage===10){
                showCompresorStage += 1;
                requestLevel(20, 'B');
                requestPressure(30, 'B');
              }
          }
        } else {
          SalidaTanqueB = false;
        }
      }
    } else {
      if (runCompresor) {
        $compresor.attr('src', `${pathCompresor}${framesCompresor}.png`);
        if (framesCompresor >= totalFrameCompresor) {
            framesCompresor = 0;
        } else {
            framesCompresor = framesCompresor + 1;
        }
      }

      if (framesNumberManometroA !== framesManometroA){
        $manometroA.attr('src', `${pathManometroA}${framesNumberManometroA}.png`);
        if (framesNumberManometroA > framesManometroA) {
          framesNumberManometroA = framesNumberManometroA - 1;
        } else {
          framesNumberManometroA = framesNumberManometroA + 1;
        }
      }

      if (framesNumberManometroB !== framesManometroB){
        $manometroB.attr('src', `${pathManometroB}${framesNumberManometroB}.png`);
        if (framesNumberManometroB > framesManometroB) {
          framesNumberManometroB = framesNumberManometroB - 1;
        } else {
          framesNumberManometroB = framesNumberManometroB + 1;
        }
      }

      if(framesNumberNivelA !== framesNivelA) {
        $nivelA.attr('src', `${pathNivelA}${framesNumberNivelA}.png`);
        if (framesNumberNivelA > framesNivelA) {
            framesNumberNivelA = framesNumberNivelA - 1;
        } else {
            framesNumberNivelA = framesNumberNivelA + 1;
        }
      }

      if(framesNumberNivelB !== framesNivelB) {
        $nivelB.attr('src', `${pathNivelB}${framesNumberNivelB}.png`);
        if (framesNumberNivelB > framesNivelB) {
            framesNumberNivelB = framesNumberNivelB - 1;
        } else {
            framesNumberNivelB = framesNumberNivelB + 1;
        }
      }

      if(EntradaTanqueA){
        if(framesEntradaA <= totalFrameEntradaCompresor){
          $entradaA.attr('src', `${pathEntradaA}${framesEntradaA}.png`);
          framesEntradaA = framesEntradaA + 1;
          if(framesEntradaA===60){
              EntradaTanqueA = false;
          }
        } else {
          EntradaTanqueA = false;
        }
      }

      if(EntradaTanqueB){
        if(framesEntradaB <= totalFrameEntradaCompresor){
          $entradaB.attr('src', `${pathEntradaB}${framesEntradaB}.png`);
          framesEntradaB = framesEntradaB + 1;
          if(framesEntradaB===60){
              EntradaTanqueB = false;
          }
        } else {
          EntradaTanqueB = false;
        }
      }

      if(SalidaTanqueA){
        if(framesSalidaA <= totalFrameSalidaCompresor){
          $salidaA.attr('src', `${pathSalidaA}${framesSalidaA}.png`);
          framesSalidaA = framesSalidaA + 1;
          if(framesSalidaA===73){
              SalidaTanqueA = false;
          }
        } else {
          SalidaTanqueA = false;
        }
      }

      if(SalidaTanqueB){
        if(framesSalidaB <= totalFrameSalidaCompresor){
          $salidaB.attr('src', `${pathSalidaB}${framesSalidaB}.png`);
          framesSalidaB = framesSalidaB + 1;
          if(framesSalidaB===73){
              SalidaTanqueB = false;
          }
        } else {
          SalidaTanqueB = false;
        }
      }
    }
    timeWhenLastUpdateCompresor = startTime;
  }



  if(scr.attributes.growy!==undefined && !scr.attributes.growy){
    if (!timeWhenLastUpdateReloj) timeWhenLastUpdateReloj = startTime;
    timeFromLastUpdateReloj = startTime - timeWhenLastUpdateReloj;

    if (timeFromLastUpdateReloj > timePerFrameReloj) {
      setDate();
      timeWhenLastUpdateReloj = startTime;
    }
  }

  requestAnimationFrame(animation);
}

function setDate() {
  var seconds = 0;
  var mins = 0;
  var hour = 0;

  if (scr.attributes.timeLapse!==undefined && scr.attributes.timeLapse.render) {
    // Aquí va el código para controlar el reloj durante el timeLapse
    seconds = 45;
    mins = 30;
    hour = 12;
  } else if (scr.attributes.growy!==undefined && scr.attributes.growy) {
    // Aquí va el código para controlar el reloj durante la animación de Growy
    seconds = 15;
    mins = 30;
    hour = 9;
  } else {
    const now = new Date();
    seconds = now.getSeconds();
    mins = now.getMinutes();
    hour = now.getHours();
  }

  if (secondsDegrees === 0){
    secondsDegrees = ((seconds / 60) * 360) + 90;
  } else {
    secondsDegrees = secondsDegrees + ((1 / 60) * 360);
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function requestPressure(pressure, tank) {
  const maxPressure = 200;
  const percentage = pressure/maxPressure;
  const frame = parseInt(totalFrameManometroCompresor*percentage, 10);
  if (tank==='A') {
    framesManometroA = frame;
  } else {
    framesManometroB = frame;
  }
}

function requestLevel(liters, tank) {
  let maxLiters = 0;
  if (tank==='A') { maxLiters = 160; }
  else { maxLiters = 120; }

  const percentage = liters/maxLiters;
  const frame = parseInt(totalFrameNivelCompresor*percentage, 10);
  if (tank==='A') { framesNivelA = frame; }
  else { framesNivelB = frame; }
}

function requestEntradaTanque(inTank, tank) {
  if (tank==='A'){
    if (EntradaTanqueA===false) {
      EntradaTanqueA=true;
      if (inTank===true) { framesEntradaA = 0; }
      else { framesEntradaA = 61; }
    }
  } else if (tank==='B') {
    if (EntradaTanqueB===false) {
      EntradaTanqueB=true;
      if (inTank===true) { framesEntradaB = 0; }
      else { framesEntradaB = 61; }
    }
  }
}

function requestSalidaTanque(outTank, tank) {
  if (tank==='A') {
    if (SalidaTanqueA===false) {
      SalidaTanqueA=true;
      if (outTank===true) { framesSalidaA = 0; }
      else { framesSalidaA = 73; }
    }
  } else if (tank==='B') {
    if (SalidaTanqueB===false) {
      SalidaTanqueB=true;
      if (outTank===true) { framesSalidaB = 0; }
      else { framesSalidaB = 73; }
    }
  }
}

function levelRecirculation(tank, liters){
  // tank 6 (enterrado)
  // tank 7 (sMaker)
  const maxLiters = 200;
  const percentage = liters/maxLiters;
  const frame = parseInt(totalFrameNivelRecirculado*percentage, 10);

  if (tank===1){
    framesNivelT1 = frame;
  } else if (tank===2){
    framesNivelT2 = frame;
  } else if (tank===3){
    framesNivelT3 = frame;
  } else if (tank===4){
    framesNivelT4 = frame;
  } else if (tank===5){
    framesNivelT5 = frame;
  } else if (tank===6){
    framesNivelTA = frame;
  } else if (tank===7){
    framesNivelTB = frame;
  }
}

function recirculationIndicator(tank, act){
  // act == 0 -> Nothing
  // act == 1 -> In
  // act == 2 -> Out
  if(tank===5){
    if(actTank1!==act){
      framesFocoT1 = 0;
      actTank1=act;
      if (act===0){ $focoT1.attr('src', `${pathFocosRojos}${0}.png`); }
    }
  } else if(tank===4){
    if(actTank2!==act){
      framesFocoT2 = 0;
      actTank2=act;
      if (act===0){ $focoT2.attr('src', `${pathFocosRojos}${0}.png`); }
    }
  } else if(tank===3){
    if(actTank3!==act){
      framesFocoT3 = 0;
      actTank3=act;
      if (act===0){ $focoT3.attr('src', `${pathFocosRojos}${0}.png`); }
    }
  } else if(tank===2){
    if(actTank4!==act){
      framesFocoT4 = 0;
      actTank4=act;
      if (act===0){ $focoT4.attr('src', `${pathFocosRojos}${0}.png`); }
    }
  } else if(tank===1){
    if(actTank5!==act){
      framesFocoT5 = 0;
      actTank5=act;
      if (act===0){ $focoT5.attr('src', `${pathFocosRojos}${0}.png`); }
    }
  }
}

function fillRecirculationEntrada(tank) {
  if (RecirculadoEntrada===false) {
    RecirculadoEntrada=true;
    if(tank===1) {
      pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn5/LineaAguaOn5_";
    } else if(tank===2){
      pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn4/LineaAguaOn4_";
    } else if(tank===3){
      pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn3/LineaAguaOn3_";
    } else if(tank===4){
      pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn2/LineaAguaOn2_";
    } else if(tank===5){
      pathEntradaRecirculado = "./img/LineasAgua/On/LineaAguaOn1/LineaAguaOn1_";
    }
    TanqueEntrada = tank;
    framesEntradaRecirculado = 0;
  }
}

function emptyRecirculationEntrada(){
  if (RecirculadoEntrada===false) {
    RecirculadoEntrada=true;
    if(TanqueEntrada===1) {
      pathEntradaRecirculado = "./img/LineasAgua/Off/LineaAguaOff5/LineaAguaOff5_";
    } else if(TanqueEntrada===2){
      pathEntradaRecirculado = "./img/LineasAgua/Off/LineaAguaOff4/LineaAguaOff4_";
    } else if(TanqueEntrada===3){
      pathEntradaRecirculado = "./img/LineasAgua/Off/LineaAguaOff3/LineaAguaOff3_";
    } else if(TanqueEntrada===4){
      pathEntradaRecirculado = "./img/LineasAgua/Off/LineaAguaOff2/LineaAguaOff2_";
    } else if(TanqueEntrada===5){
      pathEntradaRecirculado = "./img/LineasAgua/Off/LineaAguaOff1/LineaAguaOff1_";
    }
    framesEntradaRecirculado = 0;
  }
}

function fillRecirculationSalida(tank) {
  if (RecirculadoSalida===false) {
    RecirculadoSalida=true;
    if(tank===1) {
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque5/AguaSaleTanque5_";
    } else if(tank===2){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque4/AguaSaleTanque4_";
    } else if(tank===3){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque3/AguaSaleTanque3_";
    } else if(tank===4){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque2/AguaSaleTanque2_";
    } else if(tank===5){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque1/AguaSaleTanque1_";
    }
    TanqueSalida = tank;
    framesSalidaRecirculado = 0;
  }
}

function emptyRecirculationSalida(){
  if (RecirculadoSalida===false) {
    RecirculadoSalida=true;
    if(TanqueSalida===1) {
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque5/AguaSaleTanque5_";
    } else if(TanqueSalida===2){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque4/AguaSaleTanque4_";
    } else if(TanqueSalida===3){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque3/AguaSaleTanque3_";
    } else if(TanqueSalida===4){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque2/AguaSaleTanque2_";
    } else if(TanqueSalida===5){
      pathSalidaRecirculado = "./img/LineasAgua/AguaSaliendoTanques/AguaSaleTanque1/AguaSaleTanque1_";
    }
    framesSalidaRecirculado = 37;
  }
}

function fillSMaker(inSMaker) {
  if (RecirculadoEntradaSMaker===false && RecirculadoEntradaCompresor===false) {
    RecirculadoEntradaSMaker=true;
    $entradaCompresor.css("z-index", "0");
    $entradaSMaker.css("z-index", "1");
    if (inSMaker===true) { framesEntradaSMaker = 0; }
    else { framesEntradaSMaker = 37; }
  }
}

function emptySMaker(outSMaker) {
  if (RecirculadoSalidaSMaker===false) {
    RecirculadoSalidaSMaker=true;
    if (outSMaker===true) { framesSalidaSMaker = 0; }
    else { framesSalidaSMaker = 29; }
  }
}

function fillCompressor(inCompressor) {
  if (RecirculadoEntradaCompresor===false && RecirculadoEntradaSMaker ===false) {
    RecirculadoEntradaCompresor=true;
    $entradaCompresor.css("z-index", "1");
    $entradaSMaker.css("z-index", "0");
    if (inCompressor===true) { framesEntradaCompresor = 0; }
    else { framesEntradaCompresor = 37; }
  }
}

function requestTemp(temp, scr) {
  let percentage = 2.8571*temp;
  if (percentage < 1) { percentage = 1; }
  else if (percentage > 100) { percentage = 100; }
  if (scr===1) {
    actualTemp_1 = temp;
    framesMedTemp_1 = parseInt(totalFramesMedTemp*percentage/100, 10);
    textTemp_1.innerHTML = `${temp} ºC`;
  } else if (scr===2){
    actualTemp_2 = temp;
    framesMedTemp_2 = parseInt(totalFramesMedTemp*percentage/100, 10);
    textTemp_2.innerHTML = `${temp} ºC`;
  } else if (scr===3){
    actualTemp_3 = temp;
    framesMedTemp_3 = parseInt(totalFramesMedTemp*percentage/100, 10);
    textTemp_3.innerHTML = `${temp} ºC`;
  } else if (scr===4){
    actualTemp_4 = temp;
    framesMedTemp_4 = parseInt(totalFramesMedTemp*percentage/100, 10);
    textTemp_4.innerHTML = `${temp} ºC`;
  }
}

function requestHum(hum, scr) {
  actualHum = hum;
  if (scr===1) {
    framesMedHum_1 = parseInt(totalFramesMedHum*hum/100, 10);
    textHum_1.innerHTML = `${hum} %`;
  } else if (scr===2){
    framesMedHum_2 = parseInt(totalFramesMedHum*hum/100, 10);
    textHum_2.innerHTML = `${hum} %`;
  } else if (scr===3){
    framesMedHum_3 = parseInt(totalFramesMedHum*hum/100, 10);
    textHum_3.innerHTML = `${hum} %`;
  } else if (scr===4){
    framesMedHum_4 = parseInt(totalFramesMedHum*hum/100, 10);
    textHum_4.innerHTML = `${hum} %`;
  }
}

function requestCO2(co2, scr) {
  let percentage = -0.000123*co2*co2 + 0.2673*co2 - 44.591;
  if (percentage < 1) { percentage = 1; }
  else if (percentage > 100) { percentage = 100; }

  if (scr===1) {
    actualCO2_1 = co2;
    framesMedCO2_1 = parseInt(totalFramesMedCO2*percentage/100, 10);
    textCO2_1.innerHTML = `${co2} ppm`;
  } else if (scr===2){
    actualCO2_2 = co2;
    framesMedCO2_2 = parseInt(totalFramesMedCO2*percentage/100, 10);
    textCO2_2.innerHTML = `${co2} ppm`;
  } else if (scr===3){
    actualCO2_3 = co2;
    framesMedCO2_3 = parseInt(totalFramesMedCO2*percentage/100, 10);
    textCO2_3.innerHTML = `${co2} ppm`;
  } else if (scr===4){
    actualCO2_4 = co2;
    framesMedCO2_4 = parseInt(totalFramesMedCO2*percentage/100, 10);
    textCO2_4.innerHTML = `${co2} ppm`;
  }
}

function requestRec(color, rec, scr) {
  if (scr === 1){
    if (rec === 1){
      if (colorRec1_1 !== color) {
        if (color === 'gray'){
          if (colorRec1_1 === 'blue') {
            framesRec1_1 = 72;
          } else if (colorRec1_1 === 'yellow') {
            framesRec1_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec1_1 = 48;
          if (colorRec1_1 === 'gray') {
            frameNumberRec1_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec1_1 = 24;
          if (colorRec1_1 === 'gray') {
            frameNumberRec1_1 = 0;
          }
        }
        colorRec1_1 = color;
      }
    }

    else if (rec === 2){
      if (colorRec2_1 !== color) {
        if (color === 'gray'){
          if (colorRec2_1 === 'blue') {
            framesRec2_1 = 72;
          } else if (colorRec2_1 === 'yellow') {
            framesRec2_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec2_1 = 48;
          if (colorRec2_1 === 'gray') {
            frameNumberRec2_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec2_1 = 24;
          if (colorRec2_1 === 'gray') {
            frameNumberRec2_1 = 0;
          }
        }
        colorRec2_1 = color;
      }
    }

    else if (rec === 3){
      if (colorRec3_1 !== color) {
        if (color === 'gray'){
          if (colorRec3_1 === 'blue') {
            framesRec3_1 = 72;
          } else if (colorRec3_1 === 'yellow') {
            framesRec3_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec3_1 = 48;
          if (colorRec3_1 === 'gray') {
            frameNumberRec3_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec3_1 = 24;
          if (colorRec3_1 === 'gray') {
            frameNumberRec3_1 = 0;
          }
        }
        colorRec3_1 = color;
      }
    }

    else if (rec === 4){
      if (colorRec4_1 !== color) {
        if (color === 'gray'){
          if (colorRec4_1 === 'blue') {
            framesRec4_1 = 72;
          } else if (colorRec4_1 === 'yellow') {
            framesRec4_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec4_1 = 48;
          if (colorRec4_1 === 'gray') {
            frameNumberRec4_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec4_1 = 24;
          if (colorRec4_1 === 'gray') {
            frameNumberRec4_1 = 0;
          }
        }
        colorRec4_1 = color;
      }
    }

    else if (rec === 5){
      if (colorRec5_1 !== color) {
        if (color === 'gray'){
          if (colorRec5_1 === 'blue') {
            framesRec5_1 = 72;
          } else if (colorRec5_1 === 'yellow') {
            framesRec5_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec5_1 = 48;
          if (colorRec5_1 === 'gray') {
            frameNumberRec5_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec5_1 = 24;
          if (colorRec5_1 === 'gray') {
            frameNumberRec5_1 = 0;
          }
        }
        colorRec5_1 = color;
      }
    }

    else if (rec === 6){
      if (colorRec6_1 !== color) {
        if (color === 'gray'){
          if (colorRec6_1 === 'blue') {
            framesRec6_1 = 72;
          } else if (colorRec6_1 === 'yellow') {
            framesRec6_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec6_1 = 48;
          if (colorRec6_1 === 'gray') {
            frameNumberRec6_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec6_1 = 24;
          if (colorRec6_1 === 'gray') {
            frameNumberRec6_1 = 0;
          }
        }
        colorRec6_1 = color;
      }
    }

    else if (rec === 7){
      if (colorRec7_1 !== color) {
        if (color === 'gray'){
          if (colorRec7_1 === 'blue') {
            framesRec7_1 = 72;
          } else if (colorRec7_1 === 'yellow') {
            framesRec7_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec7_1 = 48;
          if (colorRec7_1 === 'gray') {
            frameNumberRec7_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec7_1 = 24;
          if (colorRec7_1 === 'gray') {
            frameNumberRec7_1 = 0;
          }
        }
        colorRec7_1 = color;
      }
    }

    else if (rec === 8){
      if (colorRec8_1 !== color) {
        if (color === 'gray'){
          if (colorRec8_1 === 'blue') {
            framesRec8_1 = 72;
          } else if (colorRec8_1 === 'yellow') {
            framesRec8_1 = 0;
          }
        } else if (color === 'blue') {
          framesRec8_1 = 48;
          if (colorRec8_1 === 'gray') {
            frameNumberRec8_1 = 72;
          }
        } else if (color === 'yellow') {
          framesRec8_1 = 24;
          if (colorRec8_1 === 'gray') {
            frameNumberRec8_1 = 0;
          }
        }
        colorRec8_1 = color;
      }
    }
  } else if (scr === 2) {
    if (rec === 1){
      if (colorRec1_2 !== color) {
        if (color === 'gray'){
          if (colorRec1_2 === 'blue') {
            framesRec1_2 = 72;
          } else if (colorRec1_2 === 'yellow') {
            framesRec1_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec1_2 = 48;
          if (colorRec1_2 === 'gray') {
            frameNumberRec1_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec1_2 = 24;
          if (colorRec1_2 === 'gray') {
            frameNumberRec1_2 = 0;
          }
        }
        colorRec1_2 = color;
      }
    }

    else if (rec === 2){
      if (colorRec2_2 !== color) {
        if (color === 'gray'){
          if (colorRec2_2 === 'blue') {
            framesRec2_2 = 72;
          } else if (colorRec2_2 === 'yellow') {
            framesRec2_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec2_2 = 48;
          if (colorRec2_2 === 'gray') {
            frameNumberRec2_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec2_2 = 24;
          if (colorRec2_2 === 'gray') {
            frameNumberRec2_2 = 0;
          }
        }
        colorRec2_2 = color;
      }
    }

    else if (rec === 3){
      if (colorRec3_2 !== color) {
        if (color === 'gray'){
          if (colorRec3_2 === 'blue') {
            framesRec3_2 = 72;
          } else if (colorRec3_2 === 'yellow') {
            framesRec3_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec3_2 = 48;
          if (colorRec3_2 === 'gray') {
            frameNumberRec3_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec3_2 = 24;
          if (colorRec3_2 === 'gray') {
            frameNumberRec3_2 = 0;
          }
        }
        colorRec3_2 = color;
      }
    }

    else if (rec === 4){
      if (colorRec4_2 !== color) {
        if (color === 'gray'){
          if (colorRec4_2 === 'blue') {
            framesRec4_2 = 72;
          } else if (colorRec4_2 === 'yellow') {
            framesRec4_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec4_2 = 48;
          if (colorRec4_2 === 'gray') {
            frameNumberRec4_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec4_2 = 24;
          if (colorRec4_2 === 'gray') {
            frameNumberRec4_2 = 0;
          }
        }
        colorRec4_2 = color;
      }
    }

    else if (rec === 5){
      if (colorRec5_2 !== color) {
        if (color === 'gray'){
          if (colorRec5_2 === 'blue') {
            framesRec5_2 = 72;
          } else if (colorRec5_2 === 'yellow') {
            framesRec5_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec5_2 = 48;
          if (colorRec5_2 === 'gray') {
            frameNumberRec5_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec5_2 = 24;
          if (colorRec5_2 === 'gray') {
            frameNumberRec5_2 = 0;
          }
        }
        colorRec5_2 = color;
      }
    }

    else if (rec === 6){
      if (colorRec6_2 !== color) {
        if (color === 'gray'){
          if (colorRec6_2 === 'blue') {
            framesRec6_2 = 72;
          } else if (colorRec6_2 === 'yellow') {
            framesRec6_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec6_2 = 48;
          if (colorRec6_2 === 'gray') {
            frameNumberRec6_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec6_2 = 24;
          if (colorRec6_2 === 'gray') {
            frameNumberRec6_2 = 0;
          }
        }
        colorRec6_2 = color;
      }
    }

    else if (rec === 7){
      if (colorRec7_2 !== color) {
        if (color === 'gray'){
          if (colorRec7_2 === 'blue') {
            framesRec7_2 = 72;
          } else if (colorRec7_2 === 'yellow') {
            framesRec7_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec7_2 = 48;
          if (colorRec7_2 === 'gray') {
            frameNumberRec7_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec7_2 = 24;
          if (colorRec7_2 === 'gray') {
            frameNumberRec7_2 = 0;
          }
        }
        colorRec7_2 = color;
      }
    }

    else if (rec === 8){
      if (colorRec8_2 !== color) {
        if (color === 'gray'){
          if (colorRec8_2 === 'blue') {
            framesRec8_2 = 72;
          } else if (colorRec8_2 === 'yellow') {
            framesRec8_2 = 0;
          }
        } else if (color === 'blue') {
          framesRec8_2 = 48;
          if (colorRec8_2 === 'gray') {
            frameNumberRec8_2 = 72;
          }
        } else if (color === 'yellow') {
          framesRec8_2 = 24;
          if (colorRec8_2 === 'gray') {
            frameNumberRec8_2 = 0;
          }
        }
        colorRec8_2 = color;
      }
    }
  } else if (scr === 3) {
    if (rec === 1){
      if (colorRec1_3 !== color) {
        if (color === 'gray'){
          if (colorRec1_3 === 'blue') {
            framesRec1_3 = 72;
          } else if (colorRec1_3 === 'yellow') {
            framesRec1_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec1_3 = 48;
          if (colorRec1_3 === 'gray') {
            frameNumberRec1_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec1_3 = 24;
          if (colorRec1_3 === 'gray') {
            frameNumberRec1_3 = 0;
          }
        }
        colorRec1_3 = color;
      }
    }

    else if (rec === 2){
      if (colorRec2_3 !== color) {
        if (color === 'gray'){
          if (colorRec2_3 === 'blue') {
            framesRec2_3 = 72;
          } else if (colorRec2_3 === 'yellow') {
            framesRec2_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec2_3 = 48;
          if (colorRec2_3 === 'gray') {
            frameNumberRec2_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec2_3 = 24;
          if (colorRec2_3 === 'gray') {
            frameNumberRec2_3 = 0;
          }
        }
        colorRec2_3 = color;
      }
    }

    else if (rec === 3){
      if (colorRec3_3 !== color) {
        if (color === 'gray'){
          if (colorRec3_3 === 'blue') {
            framesRec3_3 = 72;
          } else if (colorRec3_3 === 'yellow') {
            framesRec3_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec3_3 = 48;
          if (colorRec3_3 === 'gray') {
            frameNumberRec3_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec3_3 = 24;
          if (colorRec3_3 === 'gray') {
            frameNumberRec3_3 = 0;
          }
        }
        colorRec3_3 = color;
      }
    }

    else if (rec === 4){
      if (colorRec4_3 !== color) {
        if (color === 'gray'){
          if (colorRec4_3 === 'blue') {
            framesRec4_3 = 72;
          } else if (colorRec4_3 === 'yellow') {
            framesRec4_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec4_3 = 48;
          if (colorRec4_3 === 'gray') {
            frameNumberRec4_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec4_3 = 24;
          if (colorRec4_3 === 'gray') {
            frameNumberRec4_3 = 0;
          }
        }
        colorRec4_3 = color;
      }
    }

    else if (rec === 5){
      if (colorRec5_3 !== color) {
        if (color === 'gray'){
          if (colorRec5_3 === 'blue') {
            framesRec5_3 = 72;
          } else if (colorRec5_3 === 'yellow') {
            framesRec5_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec5_3 = 48;
          if (colorRec5_3 === 'gray') {
            frameNumberRec5_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec5_3 = 24;
          if (colorRec5_3 === 'gray') {
            frameNumberRec5_3 = 0;
          }
        }
        colorRec5_3 = color;
      }
    }

    else if (rec === 6){
      if (colorRec6_3 !== color) {
        if (color === 'gray'){
          if (colorRec6_3 === 'blue') {
            framesRec6_3 = 72;
          } else if (colorRec6_3 === 'yellow') {
            framesRec6_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec6_3 = 48;
          if (colorRec6_3 === 'gray') {
            frameNumberRec6_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec6_3 = 24;
          if (colorRec6_3 === 'gray') {
            frameNumberRec6_3 = 0;
          }
        }
        colorRec6_3 = color;
      }
    }

    else if (rec === 7){
      if (colorRec7_3 !== color) {
        if (color === 'gray'){
          if (colorRec7_3 === 'blue') {
            framesRec7_3 = 72;
          } else if (colorRec7_3 === 'yellow') {
            framesRec7_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec7_3 = 48;
          if (colorRec7_3 === 'gray') {
            frameNumberRec7_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec7_3 = 24;
          if (colorRec7_3 === 'gray') {
            frameNumberRec7_3 = 0;
          }
        }
        colorRec7_3 = color;
      }
    }

    else if (rec === 8){
      if (colorRec8_3 !== color) {
        if (color === 'gray'){
          if (colorRec8_3 === 'blue') {
            framesRec8_3 = 72;
          } else if (colorRec8_3 === 'yellow') {
            framesRec8_3 = 0;
          }
        } else if (color === 'blue') {
          framesRec8_3 = 48;
          if (colorRec8_3 === 'gray') {
            frameNumberRec8_3 = 72;
          }
        } else if (color === 'yellow') {
          framesRec8_3 = 24;
          if (colorRec8_3 === 'gray') {
            frameNumberRec8_3 = 0;
          }
        }
        colorRec8_3 = color;
      }
    }
  } else if (scr === 4) {
    if (rec === 1){
      if (colorRec1_4 !== color) {
        if (color === 'gray'){
          if (colorRec1_4 === 'blue') {
            framesRec1_4 = 72;
          } else if (colorRec1_4 === 'yellow') {
            framesRec1_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec1_4 = 48;
          if (colorRec1_4 === 'gray') {
            frameNumberRec1_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec1_4 = 24;
          if (colorRec1_4 === 'gray') {
            frameNumberRec1_4 = 0;
          }
        }
        colorRec1_4 = color;
      }
    }

    else if (rec === 2){
      if (colorRec2_4 !== color) {
        if (color === 'gray'){
          if (colorRec2_4 === 'blue') {
            framesRec2_4 = 72;
          } else if (colorRec2_4 === 'yellow') {
            framesRec2_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec2_4 = 48;
          if (colorRec2_4 === 'gray') {
            frameNumberRec2_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec2_4 = 24;
          if (colorRec2_4 === 'gray') {
            frameNumberRec2_4 = 0;
          }
        }
        colorRec2_4 = color;
      }
    }

    else if (rec === 3){
      if (colorRec3_4 !== color) {
        if (color === 'gray'){
          if (colorRec3_4 === 'blue') {
            framesRec3_4 = 72;
          } else if (colorRec3_4 === 'yellow') {
            framesRec3_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec3_4 = 48;
          if (colorRec3_4 === 'gray') {
            frameNumberRec3_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec3_4 = 24;
          if (colorRec3_4 === 'gray') {
            frameNumberRec3_4 = 0;
          }
        }
        colorRec3_4 = color;
      }
    }

    else if (rec === 4){
      if (colorRec4_4 !== color) {
        if (color === 'gray'){
          if (colorRec4_4 === 'blue') {
            framesRec4_4 = 72;
          } else if (colorRec4_4 === 'yellow') {
            framesRec4_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec4_4 = 48;
          if (colorRec4_4 === 'gray') {
            frameNumberRec4_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec4_4 = 24;
          if (colorRec4_4 === 'gray') {
            frameNumberRec4_4 = 0;
          }
        }
        colorRec4_4 = color;
      }
    }

    else if (rec === 5){
      if (colorRec5_4 !== color) {
        if (color === 'gray'){
          if (colorRec5_4 === 'blue') {
            framesRec5_4 = 72;
          } else if (colorRec5_4 === 'yellow') {
            framesRec5_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec5_4 = 48;
          if (colorRec5_4 === 'gray') {
            frameNumberRec5_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec5_4 = 24;
          if (colorRec5_4 === 'gray') {
            frameNumberRec5_4 = 0;
          }
        }
        colorRec5_4 = color;
      }
    }

    else if (rec === 6){
      if (colorRec6_4 !== color) {
        if (color === 'gray'){
          if (colorRec6_4 === 'blue') {
            framesRec6_4 = 72;
          } else if (colorRec6_4 === 'yellow') {
            framesRec6_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec6_4 = 48;
          if (colorRec6_4 === 'gray') {
            frameNumberRec6_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec6_4 = 24;
          if (colorRec6_4 === 'gray') {
            frameNumberRec6_4 = 0;
          }
        }
        colorRec6_4 = color;
      }
    }

    else if (rec === 7){
      if (colorRec7_4 !== color) {
        if (color === 'gray'){
          if (colorRec7_4 === 'blue') {
            framesRec7_4 = 72;
          } else if (colorRec7_4 === 'yellow') {
            framesRec7_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec7_4 = 48;
          if (colorRec7_4 === 'gray') {
            frameNumberRec7_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec7_4 = 24;
          if (colorRec7_4 === 'gray') {
            frameNumberRec7_4 = 0;
          }
        }
        colorRec7_4 = color;
      }
    }

    else if (rec === 8){
      if (colorRec8_4 !== color) {
        if (color === 'gray'){
          if (colorRec8_4 === 'blue') {
            framesRec8_4 = 72;
          } else if (colorRec8_4 === 'yellow') {
            framesRec8_4 = 0;
          }
        } else if (color === 'blue') {
          framesRec8_4 = 48;
          if (colorRec8_4 === 'gray') {
            frameNumberRec8_4 = 72;
          }
        } else if (color === 'yellow') {
          framesRec8_4 = 24;
          if (colorRec8_4 === 'gray') {
            frameNumberRec8_4 = 0;
          }
        }
        colorRec8_4 = color;
      }
    }
  }

}

function startPlantas(){
  /* Start Show Plantas */
  $crecimiento1.css("visibility", "visible");
  $crecimiento2.css("visibility", "visible");
  $crecimiento3.css("visibility", "visible");
  $crecimiento4.css("visibility", "visible");
  requestTemp(18, 1);
  requestHum(70, 1);
  requestCO2(450, 1);
  for (var j = 1; j < 8 + 1; j++) {
    requestRec('yellow', j, 1);
  }
  showPlanta1 = true;
  runVent1_1 = true;
  runRiego_1 = true;
}

function startRecirculation(){
  /* Start Show Recirculation */
  showRecirculado = true;
  $recirculado.css("visibility", "visible");
  levelRecirculation(6, 200);
  showRecirculadoStage += 1;
}

function startCompressor(){
  /* Start Show Compressor */
  $sistemaCompresion.css("visibility", "visible");
  showCompresor = true;
  showCompresorStage += 1;
  requestEntradaTanque(true, 'A');
}

function startGrowy(){
  frameNumberGrowy = 0;
  $clock.css("visibility", "hidden");
  $growyAnimated.css("visibility", "visible");
}

Parse.initialize("123456", "...", "...");
Parse.serverURL = 'http://localhost:1337/parse';
//Parse.serverURL = 'http://192.168.1.84:1337/parse';

// System ID
const sysID = "15-113-001";

// Asignación variables mongoDB-Parse
var Config = Parse.Object.extend("Config");
var query1 = new Parse.Query(Config);
let configId = '';
var Screen = Parse.Object.extend("Screens");
var query2 = new Parse.Query(Screen);
let screenId = '';
var State = Parse.Object.extend("State");
var query3 = new Parse.Query(State);

// Screen object.
var scr = new Screen();

query1.equalTo('systemId', sysID);
query1.descending('createdAt');
query1.limit(1);
query1.find()
.then((state) => {
  configId = state[0].id;
  console.log("configId: ",configId);

  if (state[0].attributes.city !== '' ||  state[0].attributes.city !== undefined) {
    locationV = (state[0].attributes.city + ", " + state[0].attributes.state);
  }
  else { locationV = 'Valle de Bravo, Estado de México'; }
  if (state[0].attributes.hardwareVersion !== '' ||  state[0].attributes.hardwareVersion !== undefined) {
    systemV = state[0].attributes.hardwareVersion;
  }
  else { systemV = '1.0.4.1'; }
  if (state[0].attributes.softwareVersion !== '' ||  state[0].attributes.softwareVersion !== undefined) {
    softwareV = state[0].attributes.softwareVersion;
  }
  else { softwareV = '1.0.0.1'; }
  locEl.innerHTML = `${locationV}`;
  vosEl.innerHTML = `${systemV}`;
  vswEl.innerHTML = `${softwareV}`;

  const ptr = {
    __type: 'Pointer',
    className: 'Config',
    objectId: configId
  };
  query2.equalTo('system', ptr);
  query2.find().then((screen) => {
    screenId = screen[0].id;
    scr.set('objectId', screenId);

    const currentDate = new Date();
    const timeLapse = {
      render: false,
      start: currentDate,
      end: currentDate
    };
    scr.set('objectId', screenId);
    scr.set('floor1', false);
    scr.set('floor2', false);
    scr.set('floor3', false);
    scr.set('floor4', false);
    scr.set('recirculation', false);
    scr.set('compressor', false);
    scr.set('growy', false);
    scr.set('timeLapse', timeLapse);
    scr.save().then((screen) => {
      console.log('Reset all screen parameters', scr.attributes);
    }, (error) => {
      console.log(error);
    });

    let liveState = new Parse.Query('State');
    let subscription = liveState.subscribe().then( (sub) => {
      console.log('LiveQuery Subscription to State Class succeed');

      sub.on('create', (object) => {
        console.log('State object created', object.attributes);
        if (configId === object.attributes.system.id) {
          // Update main screen
          if (object.attributes.tempExt !== 0 ) {
            tempV = (object.attributes.tempExt).toString();
            tempEl.innerHTML = `${tempV} ºC`;
          }
          if (object.attributes.humExt !== 0 ) {
            humidityV = (object.attributes.humExt).toString();
            humEl.innerHTML = `${humidityV} %`;
          }

          // If not timelapse or initial show then
          if(!scr.attributes.timeLapse.render && scr.attributes.floor1 && scr.attributes.floor2 &&
             scr.attributes.floor3 && scr.attributes.floor4 && showPlanta1===false &&
            showPlanta2===false && showPlanta3===false && showPlanta4===false){
            // Internal Fans
            if (object.attributes.FAN1===true && runVentiladores_1===false) {
              runVentiladores_1 = true;
            } else if (object.attributes.FAN1===false && runVentiladores_1===true) {
              runVentiladores_1 = false;
            }
            if (object.attributes.FAN2===true && runVentiladores_2===false) {
              runVentiladores_2 = true;
            } else if (object.attributes.FAN1===false && runVentiladores_2===true) {
              runVentiladores_2 = false;
            }
            if (object.attributes.FAN3===true && runVentiladores_3===false) {
              runVentiladores_3 = true;
            } else if (object.attributes.FAN3===false && runVentiladores_3===true) {
              runVentiladores_3 = false;
            }
            if (object.attributes.FAN4===true && runVentiladores_4===false) {
              runVentiladores_4 = true;
            } else if (object.attributes.FAN4===false && runVentiladores_4===true) {
              runVentiladores_4 = false;
            }

            // Extractor Fans
            if (object.attributes.OUT_FAN1===true && runVent1_1===false) {
              runVent1_1 = true;
            } else if (object.attributes.OUT_FAN1===false && runVent1_1===true) {
              runVent1_1 = false;
            }
            if (object.attributes.OUT_FAN2===true && runVent1_2===false) {
              runVent1_2 = true;
            } else if (object.attributes.OUT_FAN2===false && runVent1_2===true) {
              runVent1_2 = false;
            }
            if (object.attributes.OUT_FAN3===true && runVent1_3===false) {
              runVent1_3 = true;
            } else if (object.attributes.OUT_FAN3===false && runVent1_3===true) {
              runVent1_3 = false;
            }
            if (object.attributes.OUT_FAN4===true && runVent1_4===false) {
              runVent1_4 = true;
            } else if (object.attributes.OUT_FAN4===false && runVent1_4===true) {
              runVent1_4 = false;
            }

            // Inyector Fans
            if (object.attributes.IN_FAN1===true && runVent2_1===false) {
              runVent2_1 = true;
            } else if (object.attributes.IN_FAN1===false && runVent2_1===true) {
              runVent2_1 = false;
            }
            if (object.attributes.IN_FAN2===true && runVent2_2===false) {
              runVent2_2 = true;
            } else if (object.attributes.IN_FAN2===false && runVent2_2===true) {
              runVent2_2 = false;
            }
            if (object.attributes.IN_FAN3===true && runVent2_3===false) {
              runVent2_3 = true;
            } else if (object.attributes.IN_FAN3===false && runVent2_3===true) {
              runVent2_3 = false;
            }
            if (object.attributes.IN_FAN4===true && runVent2_4===false) {
              runVent2_4 = true;
            } else if (object.attributes.IN_FAN4===false && runVent2_4===true) {
              runVent2_4 = false;
            }

            if ( (object.attributes.EV1A1 || object.attributes.EV1B1 ||
                  object.attributes.EV2A1 || object.attributes.EV2B1 ||
                  object.attributes.EV3A1 || object.attributes.EV3B1 ||
                  object.attributes.EV4A1 || object.attributes.EV4B1)) {
              queryRiego_1 = true;
            } else { queryRiego_1 = false; }
            if ( (object.attributes.EV1A2 || object.attributes.EV1B2 ||
                  object.attributes.EV2A2 || object.attributes.EV2B2 ||
                  object.attributes.EV3A2 || object.attributes.EV3B2 ||
                  object.attributes.EV4A2 || object.attributes.EV4B2)) {
              queryRiego_2 = true;
            } else { queryRiego_2 = false; }
            if ( (object.attributes.EV1A3 || object.attributes.EV1B3 ||
                  object.attributes.EV2A3 || object.attributes.EV2B3 ||
                  object.attributes.EV3A3 || object.attributes.EV3B3 ||
                  object.attributes.EV4A3 || object.attributes.EV4B3)) {
              queryRiego_3 = true;
            } else { queryRiego_3 = false; }
            if ( (object.attributes.EV1A4 || object.attributes.EV1B4 ||
                  object.attributes.EV2A4 || object.attributes.EV2B4 ||
                  object.attributes.EV3A4 || object.attributes.EV3B4 ||
                  object.attributes.EV4A4 || object.attributes.EV4B4)) {
              queryRiego_4 = true;
            } else { queryRiego_4 = false; }

            if (object.attributes.Grower1.temp !== undefined || object.attributes.Grower1.temp !== null){
              if (Math.abs(actualTemp_1-object.attributes.Grower1.temp)>1) {
                requestTemp(object.attributes.Grower1.temp, 1);
              }
            }
            if (object.attributes.Grower1.hum !== undefined || object.attributes.Grower1.hum !== null){
              if (Math.abs(actualHum_1-object.attributes.Grower1.hum)>5) {
                requestHum(object.attributes.Grower1.hum, 1);
              }
            }
            if (object.attributes.Grower1.co2 !== undefined || object.attributes.Grower1.co2 !== null){
              if (Math.abs(actualCO2_1-object.attributes.Grower1.co2)>15) {
                requestCO2(object.attributes.Grower1.co2, 1);
              }
            }

            if (object.attributes.Grower2.temp !== undefined || object.attributes.Grower2.temp !== null){
              if (Math.abs(actualTemp_2-object.attributes.Grower2.temp)>1) {
                requestTemp(object.attributes.Grower2.temp, 2);
              }
            }
            if (object.attributes.Grower2.hum !== undefined || object.attributes.Grower2.hum !== null){
              if (Math.abs(actualHum_2-object.attributes.Grower2.hum)>5) {
                requestHum(object.attributes.Grower2.hum, 2);
              }
            }
            if (object.attributes.Grower2.co2 !== undefined || object.attributes.Grower2.co2 !== null){
              if (Math.abs(actualCO2_2-object.attributes.Grower2.co2)>15) {
                requestCO2(object.attributes.Grower2.co2, 2);
              }
            }

            if (object.attributes.Grower3.temp !== undefined || object.attributes.Grower3.temp !== null){
              if (Math.abs(actualTemp_3-object.attributes.Grower3.temp)>1) {
                requestTemp(object.attributes.Grower3.temp, 3);
              }
            }
            if (object.attributes.Grower3.hum !== undefined || object.attributes.Grower3.hum !== null){
              if (Math.abs(actualHum_3-object.attributes.Grower3.hum)>5) {
                requestHum(object.attributes.Grower3.hum, 3);
              }
            }
            if (object.attributes.Grower3.co2 !== undefined || object.attributes.Grower3.co2 !== null){
              if (Math.abs(actualCO2_3-object.attributes.Grower3.co2)>15) {
                requestCO2(object.attributes.Grower3.co2, 3);
              }
            }

            if (object.attributes.Grower4.temp !== undefined || object.attributes.Grower4.temp !== null){
              if (Math.abs(actualTemp_4-object.attributes.Grower4.temp)>1) {
                requestTemp(object.attributes.Grower4.temp, 4);
              }
            }
            if (object.attributes.Grower4.hum !== undefined || object.attributes.Grower4.hum !== null){
              if (Math.abs(actualHum_4-object.attributes.Grower4.hum)>5) {
                requestHum(object.attributes.Grower4.hum, 4);
              }
            }
            if (object.attributes.Grower4.co2 !== undefined || object.attributes.Grower4.co2 !== null){
              if (Math.abs(actualCO2_4-object.attributes.Grower4.co2)>15) {
                requestCO2(object.attributes.Grower4.co2, 4);
              }
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
        if (configId === object.attributes.system.id) {
          console.log('Screens object updated', object.attributes);
          scr = object;
          if (object.attributes.floor1) {
            if (showPlanta===false){
              showPlanta = true;
              startPlantas();
            }
          }
          if (object.attributes.recirculation) {
            if (showRecirculadoStage===0){
              startRecirculation();
            }
          }
          if (object.attributes.compressor) {
            if (showCompresorStage===0){
              startCompressor();
            }
          }
        }
      });
    }, (error) => {
      console.log(error);
    });

    let liveConfig = new Parse.Query('Config');
    let subscription2 = liveConfig.subscribe().then( (sub1) => {
      console.log('LiveQuery Subscription to Config Class succeed');
      sub1.on('create', (object) => {
        console.log('Config object created', object.attributes);
        if (sysID === object.attributes.systemId) {
          if (object.attributes.city !== '' ||  object.attributes.city !== undefined) {
            locationV = (object.attributes.city + ", " + object.attributes.state);
            locEl.innerHTML = `${locationV}`;
          }
          if (object.attributes.hardwareVersion !== '' ||  object.attributes.hardwareVersion !== undefined) {
            systemV = object.attributes.hardwareVersion;
            vosEl.innerHTML = `${systemV}`;
          }
          if (object.attributes.softwareVersion !== '' ||  object.attributes.softwareVersion !== undefined) {
            softwareV = object.attributes.softwareVersion;
            vswEl.innerHTML = `${softwareV}`;
          }
        }
      });
      sub1.on('update', (object) => {
        console.log('Config object updated', object.attributes);
        if (sysID === object.attributes.systemId) {
          if (object.attributes.city !== '' ||  object.attributes.city !== undefined) {
            locationV = (object.attributes.city + ", " + object.attributes.state);
            locEl.innerHTML = `${locationV}`;
          }
          if (object.attributes.hardwareVersion !== '' ||  object.attributes.hardwareVersion !== undefined) {
            systemV = object.attributes.hardwareVersion;
            vosEl.innerHTML = `${systemV}`;
          }
          if (object.attributes.softwareVersion !== '' ||  object.attributes.softwareVersion !== undefined) {
            softwareV = object.attributes.softwareVersion;
            vswEl.innerHTML = `${softwareV}`;
          }
        }
      });
      console.log("Starting animation");
      requestAnimationFrame(animation);
    }, (error) => {
      console.log(error);
    });

    }, (error) => {
      console.log(error);
    }
  );
}, (error) => {
  console.log(error);
  locationV = 'Valle de Bravo, Estado de México';
  systemV = '1.0.4.1';
  softwareV = '1.0.0.1';
  locEl.innerHTML = `${locationV}`;
  vosEl.innerHTML = `${systemV}`;
  vswEl.innerHTML = `${softwareV}`;
});

query3.exists('objectId');
query3.descending('createdAt');
query3.limit(1);
query3.find()
.then((state) => {
  if (state[0].attributes.tempExt !== 0 ) { tempV = (state[0].attributes.tempExt).toString(); }
  else { tempV = '21.75'; }
  if (state[0].attributes.humExt !== 0 ) { humidityV = (state[0].attributes.humExt).toString(); }
  else { humidityV = '65'; }
  tempEl.innerHTML = `${tempV} ºC`;
  humEl.innerHTML = `${humidityV} %`;
  console.log('Initial State charged');
}, (error) => {
  console.log(error);
  tempV = '21.75';
  humidityV = '65';
  tempEl.innerHTML = `${tempV} ºC`;
  humEl.innerHTML = `${humidityV} %`;
});

/*
Para poder hacer un loop de imágenes necesitamos precargar las imágenes que vamos a usar, para esto forzamos al navegador a cargar cada imagen creando elementos 'fantasma'
*/
$(document).ready(() => {
  const t0 = Date.now();

  for (var i = 1; i < totalFrameCompresor + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathCompresor}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameEntradaCompresor + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathEntradaA}${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathEntradaB}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameSalidaCompresor + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathSalidaA}${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathSalidaB}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameManometroCompresor + 1; i++) {
    console
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathManometroA}${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathManometroB}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameNivelCompresor + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathNivelA}${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathNivelB}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameNivelRecirculado + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}Niveles/Nivel_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameFocoTanque + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathFocosRojos}${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathFocosVerdes}${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameLineasAgua49 + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/Off/LineaAguaOff1/LineaAguaOff1_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/Off/LineaAguaOff2/LineaAguaOff2_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/Off/LineaAguaOff3/LineaAguaOff3_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/Off/LineaAguaOff4/LineaAguaOff4_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/Off/LineaAguaOff5/LineaAguaOff5_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/On/LineaAguaOn1/LineaAguaOn1_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/On/LineaAguaOn2/LineaAguaOn2_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/On/LineaAguaOn3/LineaAguaOn3_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/On/LineaAguaOn4/LineaAguaOn4_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/On/LineaAguaOn5/LineaAguaOn5_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameLineasAgua58 + 1; i++) {
    $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/VaciadoTanqueGris/VaciadoTanqueGris_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFrameLineasAgua72 + 1; i++) {
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSale/AguaSale_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSaliendoTanques/AguaSaleTanque1/AguaSaleTanque1_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSaliendoTanques/AguaSaleTanque2/AguaSaleTanque2_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSaliendoTanques/AguaSaleTanque3/AguaSaleTanque3_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSaliendoTanques/AguaSaleTanque4/AguaSaleTanque4_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/AguaSaliendoTanques/AguaSaleTanque5/AguaSaleTanque5_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${genericPath}LineasAgua/LlenadoTanqueGris/llenadoTanqueGris_${i}.png');"></div>`);
  }

  for (var i = 1; i < framesRiego + 1; i++) {
      $('body').append(`<div id="preload-image-${000 + i}" style="background-image: url('${pathRiego}ChorrosAgua_${i}.png');"></div>`);
  }

  for (var i = 1; i < framesLuces + 1; i++) {
    $('body').append(`<div id="preload-image-${00 + i}" style="background-image: url('${pathLuces1}FocosAmarillos_${i}.png');"></div>`);
    $('body').append(`<div id="preload-image-${00 + i}" style="background-image: url('${pathLuces}FocosMorados_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFramesMedCO2 + 1; i++) {
      $('body').append(`<div id="preload-image-${0000 + i}" style="background-image: url('${pathMedCO2}Medidor_CO2_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFramesMedHum + 1; i++) {
      $('body').append(`<div id="preload-image-${000000 + i}" style="background-image: url('${pathMedHum}Medidor_Humedad_${i}.png');"></div>`);
  }

  for (var i = 1; i < totalFramesMedTemp + 1; i++) {
      $('body').append(`<div id="preload-image-${00000 + i}" style="background-image: url('${pathMedTemp}Medidor_Temp_${i}.png');"></div>`);
  }

  for (var i = 1; i < framesPlantas + 1; i++) {
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${pathPlantas1}PlantitasP1_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${pathPlantas2}PlantitasP2_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${pathPlantas3}PlantitasP3_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${pathPlantas4}PlantitasP4_${i}.png');"></div>`);
  }

  for (var i = 0; i < totalFramesRectangulo + 1; i++) {
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}1/Rectangulo1_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}2/Rectangulo2_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}3/Rectangulo3_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}4/Rectangulo4_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}5/Rectangulo5_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}6/Rectangulo6_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}7/Rectangulo7_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathRectangulos}8/Rectangulo8_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathVentilador1}Ventilador1_${i}.png');"></div>`);
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathVentilador2}Ventilador2_${i}.png');"></div>`);
  }

  for (var i = 1; i < framesVentiladores + 1; i++) {
      $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${pathVentiladores}Ventiladores_${i}.png');"></div>`);
  }

  for (var i = 0; i < framesGrowy; i++) {
    let j = 0;
    if (i<10){
      j = `0000${i}.png`;
    } else if (i<100) {
      j = `000${i}.png`;
    } else if (i<1000) {
      j = `00${i}.png`;
    } else if (i<10000) {
      j = `0${i}.png`;
    } else {
      j = `${i}.png`;
    }
    // Original
    if (animacion === 'original'){ $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${genericPath}Growy/Growy_${j}');"></div>`); }
    // Español
    else if (animacion === 'español'){ $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${genericPath}GROWY_ES/GROWY_ES${j}');"></div>`); }
    // Ingles
    else if (animacion === 'ingles'){ $('body').append(`<div id="preload-image-${0 + i}" style="background-image: url('${genericPath}GROWY_EN/GROWY_EN${j}');"></div>`); }
  }

  console.log("Call to charge image " + (Date.now() - t0) + " milliseconds.");
});

/* Cuando hayan cargado todas las imágenes empezaremos las animaciones o podremos activarlas por medio de los botones correspondientes */
$(window).on('load', () => {

});
