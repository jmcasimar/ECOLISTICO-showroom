/* Definición de variables de ubicación, temperatura, humedad, systema y software */
let locationV = 'Valle de Bravo, Estado de México, México';
let tempV = '27';
let humidityV = '30';
let systemV = '2.3.0.1';
let softwareV = '1.0.4.1';

/* Obtención de campos */
const locEl = document.querySelector('#loc');
const tempEl = document.querySelector('#temp');
const humEl = document.querySelector('#hum');
const vosEl = document.querySelector('#vos');
const vswEl = document.querySelector('#vsw');

/* Asignación de variables a campos */
locEl.innerHTML = `<b>${locationV}</b>`;
tempEl.innerHTML = `<b>${tempV} ºC</b>`;
humEl.innerHTML = `<b>${humidityV} %</b>`;
vosEl.innerHTML = `<b>${systemV}</b>`;
vswEl.innerHTML = `<b>${softwareV}</b>`;