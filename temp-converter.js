const celciusInput = document.querySelector('#celcius > input');
const fahreheitInput = document.querySelector('#fahreheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function celciusToFahreAndKelvin() {

    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
   const kTemp = cTemp + 273.15;
   fahreheitInput.value = fTemp;
   kelvinInput.value = kTemp;
       };

       function fahreToCelciusAndKelvin() {
        const fTemp = parseFloat(fahreheitInput.value);
        const cTemp = (fTemp - 32) * (5/9);
        const kTemp = (fTemp + 459.67) * 5/9;
        celciusInput.value = cTemp;
        kelvinInput.value = kTemp;
       }
       function KelvinToCelciusAndFahre() {
        const kTemp = parseFloat(kelvinInput.value);
        const cTemp = kTemp - 273.15;
        const fTemp = 9/5 * (kTemp - 273) + 32;
        celciusInput.value = cTemp;
        fahreheitInput.value = fTemp;
       }
celciusInput.addEventListener('input', celciusToFahreAndKelvin);
fahreheitInput.addEventListener('input', fahreToCelciusAndKelvin);
kelvinInput.addEventListener('input', KelvinToCelciusAndFahre);
