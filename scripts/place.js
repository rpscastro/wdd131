// select the DOM elements for output
const temp = 10;
const wind = 5; 
const temperature = document.querySelector("#temperature");
const windSpeedy = document.querySelector("#wind");
const windChill = document.querySelector("#chill");
 
temperature.innerHTML = `${temp} °C`;
windSpeedy.innerHTML = `${wind} km/h`;

//Converts Celsius to Fahrenheit
function temperatureFahrenheit (temperatureCelsius) {

    return (9 / 5 * temperatureCelsius) + 32;
}

//Converts Fahrenheit to Celsius 
function temperatureCelsius (temperatureFahrenheit) {

    return (temperatureFahrenheit - 32) * 5 / 9;
}

//Converts Km/h to mp/h
function mph (kmph) {

    return kmph/1.609344;
}

//Calculate WindChill
function calculateWindChill (t, w){
    
    return temperatureCelsius(35.74 + 0.6215* temperatureFahrenheit(t) - 35.75 * Math.pow(mph(w),0.16) + 0.4275 * temperatureFahrenheit(t) * Math.pow(mph(w),0.16));
}




if (temp <= 10 && wind > 4.8) {

    windChill.innerHTML = `${calculateWindChill(temp, wind).toFixed(1)} °C`;

}
else {

    windChill.innerHTML = "N/A";

}