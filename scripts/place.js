// select the DOM elements for output
const temp = 10;
const wind = 5;
const temperature = document.querySelector("#temperature");
const windSpeedy = document.querySelector("#wind");
const windChill = document.querySelector("#chill");

temperature.innerHTML = `${temp} °C`;
windSpeedy.innerHTML = `${wind} km/h`;

//Converts Celsius to Fahrenheit
let celsiusToFahrenheit = (celsius) => (9 / 5 * celsius) + 32;

//Converts Fahrenheit to Celsius 
let fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

//Converts Km/h to mp/h
let kmphToMph = (kmph) => kmph / 1.609344;

//Calculate WindChill
let calculateWindChill = (t, w) => 35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16);


//If the conditions are not met, then display "N/A", which means not applicable
if (temp <= 10 && wind > 4.8) {

    windChill.innerHTML = `${fahrenheitToCelsius(calculateWindChill(celsiusToFahrenheit(temp), kmphToMph(wind))).toFixed(1)} °C`;

}
else {

    windChill.innerHTML = "N/A";

}