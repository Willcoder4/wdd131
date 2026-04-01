const temperature = 25; // °C
const windSpeed = 10; // km/h

function calculateWindChill(temp, speed) {
  return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}

const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
};