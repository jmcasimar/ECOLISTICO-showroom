Parse.initialize("123456", "...", "...");
Parse.serverURL = 'http://localhost:1337/parse';

// System ID
sysID = "15-113-001";

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

/* Asignación de variables a campos */
var State = Parse.Object.extend("State");
var query = new Parse.Query(State);

query.exists('objectId');
query.descending('createdAt');
query.limit(1);
query.find()
.then((state) => {
  if (state[0].attributes.tempExt !== 0 ) { tempV = (state[0].attributes.tempExt).toString(); }
  else { tempV = '21.75'; }
  if (state[0].attributes.humExt !== 0 ) { humidityV = (state[0].attributes.humExt).toString(); }
  else { humidityV = '65'; }
  tempEl.innerHTML = `${tempV} ºC`;
  humEl.innerHTML = `${humidityV} %`;
}, (error) => {
  console.log(error);
  tempV = '21.75';
  humidityV = '65';
  tempEl.innerHTML = `${tempV} ºC`;
  humEl.innerHTML = `${humidityV} %`;
});

var Config = Parse.Object.extend("Config");
var query1 = new Parse.Query(Config);
let configId = '';
var Screen = Parse.Object.extend("Screens");
var query2 = new Parse.Query(Screen);
let screenId = '';

query1.equalTo('systemId', sysID);
query1.descending('createdAt');
query1.limit(1);
query1.find()
.then((state) => {
  configId = state[0].id;
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
    // Update the object.
    var scr = new Screen();
    scr.set('objectId', screenId);
    scr.set('floor1', false);
    scr.set('floor2', false);
    scr.set('floor3', false);
    scr.set('floor4', false);
    scr.set('recirculation', false);
    scr.set('compressor', false);
    scr.save().then((screen) => {
      console.log('Reset all screen parameters');
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

let liveState = new Parse.Query('State');
let subscription = liveState.subscribe().then( (sub) => {
  console.log('LiveQuery Subscription to State Class succeed');
  sub.on('create', (object) => {
    console.log('State object created', object.attributes);
    if (configId === object.attributes.system.id) {
      if (object.attributes.tempExt !== 0 ) {
        tempV = (object.attributes.tempExt).toString();
        tempEl.innerHTML = `${tempV} ºC`;
      }
      if (object.attributes.humExt !== 0 ) {
        humidityV = (object.attributes.humExt).toString();
        humEl.innerHTML = `${humidityV} %`;
      }
    }
  });
}, (error) => {
  console.log(error);
});

let liveConfig = new Parse.Query('Config');
let subscription1 = liveConfig.subscribe().then( (sub1) => {
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
}, (error) => {
  console.log(error);
});

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    $('area').on('click', function() {
        if ($(this).attr('alt') === 'Puerta de contenedor') {
          // Update the object.
          var scr = new Screen();
          scr.set('objectId', screenId);
          scr.set('floor1', true);
          scr.set('floor2', true);
          scr.set('floor3', true);
          scr.set('floor4', true);
          scr.save().then((screen) => {
            console.log('Updating state to show system floors');
          }, (error) => {
            console.log(error);
          });
        }
        else if ($(this).attr('alt') === 'Sistema de Compresión') {
          // Update the object.
          var scr = new Screen();
          scr.set('objectId', screenId);
          scr.set('compressor', true);
          scr.save().then((screen) => {
            console.log('Updating state to show system compressor system');
          }, (error) => {
            console.log(error);
          });
        }
        else if ($(this).attr('alt') === 'Sistema de Recirculación') {
          // Update the object.
          var scr = new Screen();
          scr.set('objectId', screenId);
          scr.set('recirculation', true);
          scr.save().then((screen) => {
            console.log('Updating state to show recirculation system');
          }, (error) => {
            console.log(error);
          });
        }
        //alert($(this).attr('alt'));
    });

    $(function() {
        $('input[name="datetimes"]').daterangepicker({
            timePicker: true,
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(32, 'hour'),
            locale: {
                format: 'DD/MM/YYYY hh:mm A'
            }
        });
    });
});
