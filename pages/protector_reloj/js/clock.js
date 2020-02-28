Parse.initialize("123456", "...", "...");
Parse.serverURL = 'http://localhost:1337/parse';

// System ID
const sysID = "15-113-001";

// Manecillas del reloj
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

var Config = Parse.Object.extend("Config");
var query = new Parse.Query(Config);
let configId = '';
// Screen object
var Screen = Parse.Object.extend("Screens");
var scr = new Screen();

query.equalTo('systemId', sysID);
query.descending('createdAt');
query.limit(1);
query.find()
.then((state) => {
  configId = state[0].id;

}, (error) => {
  console.log(error);
});

// liveQuery to Screens class
let liveScreens = new Parse.Query('Screens');
let subscription = liveScreens.subscribe().then( (sub) => {
  console.log('LiveQuery Subscription to Screens Class succeed');
  sub.on('update', (object) => {
    if (configId === object.attributes.system.id) {
      scr = object;
      console.log('Screens object updated', object.attributes);
      // Add your code here
    }
  });
}, (error) => {
  console.log(error);
});

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

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
