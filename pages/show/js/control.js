// Parse
/* Definición de variables de ubicación, temperatura, humedad, systema y software */
let locationV = '';
let tempV = '';
let humidityV = '';
let systemV = '';
let softwareV = '';

/* Obtención de campos */
const locEl = document.querySelector('#loc');
const tempEl = document.querySelector('#temp');
const humEl = document.querySelector('#hum');
const vosEl = document.querySelector('#vos');
const vswEl = document.querySelector('#vsw');

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    $('area').on('click', function() {
        if ($(this).attr('alt') === 'Puerta de contenedor' && scr.attributes.floor1 === false) {
          startPlantas();
          // Update the object.
          scr.set('objectId', screenId);
          scr.set('floor1', true);
          scr.set('floor2', true);
          scr.set('floor3', true);
          scr.set('floor4', true);
          scr.save().then((screen) => {
            console.log('Updating state to show system floors', scr.attributes);
          }, (error) => {
            console.log(error);
          });
        }
        else if ($(this).attr('alt') === 'Sistema de Compresión' && scr.attributes.compressor === false) {
          // Update the object.
          scr.set('objectId', screenId);
          scr.set('compressor', true);
          scr.save().then((screen) => {
            console.log('Updating state to show system compressor system', scr.attributes);
          }, (error) => {
            console.log(error);
          });
        }
        else if ($(this).attr('alt') === 'Sistema de Recirculación' && scr.attributes.recirculation === false) {
          // Update the object.
          scr.set('objectId', screenId);
          scr.set('recirculation', true);
          scr.save().then((screen) => {
            console.log('Updating state to show recirculation system', scr.attributes);
          }, (error) => {
            console.log(error);
          });
        }
        //alert($(this).attr('alt'));
    });

    $(function() {
        $('input[name="datetimes"]').daterangepicker({
            timePicker: true,
            startDate: moment().startOf('hour').subtract(1, 'days'),
            endDate: moment().startOf('hour'),
            locale: {
                format: 'DD/MM/YYYY hh:mm A'
            }
        });
    });

    // When TimeLapse Accept
    $('#modalAceptar').click(
      function(e) {
        e.preventDefault();
        if (scr.attributes.growy === false && scr.attributes.timeLapse.render === false) {
          const currentDate = new Date();
          const startDate = $('input[name="datetimes"]').data('daterangepicker').startDate;
          const endDate = $('input[name="datetimes"]').data('daterangepicker').endDate;

          if (endDate._d <= currentDate) {
            const timeLapse = {
              render: true,
              start: startDate._d,
              end: endDate._d
            };
            // Update the object.
            scr.set('objectId', screenId);
            if (scr.attributes.floor1 === false) { scr.set('floor1', true); }
            if (scr.attributes.floor2 === false) { scr.set('floor2', true); }
            if (scr.attributes.floor3 === false) { scr.set('floor3', true); }
            if (scr.attributes.floor4 === false) { scr.set('floor4', true); }
            if (scr.attributes.recirculation === false) { scr.set('recirculation', true); }
            if (scr.attributes.compressor === false) { scr.set('compressor', true); }
            scr.set('timeLapse', timeLapse);
            scr.save().then((screen) => {
              console.log('Updating screen class to start timeLapse', scr.attributes);
            }, (error) => {
              console.log(error);
            });
          } else {
            alert('Error: Por favor, seleccione una fecha menor al momento actual.');
          }
        } else if (scr.attributes.growy) {
          alert('Error: No se puede iniciar el timeLapse mientras la secuencia de fotos está corriendo.');
        }
      }
    );

    // When Fotos Grower
    $('#btnGrower').click(
      function(e) {
        e.preventDefault();
        if (scr.attributes.growy===false && scr.attributes.timeLapse.render===false) {
          // Update the object.
          scr.set('objectId', screenId);
          scr.set('growy', true);
          scr.save().then((screen) => {
            startGrowy();
            console.log('Updating screen class to start growy sequence');
          }, (error) => {
            console.log(error);
          });
        }
        else if (scr.attributes.timeLapse.render){
          alert('Error: No se puede iniciar la secuencia de fotos mientras el timeLapse está corriendo.');
        }
      }
    );
});
