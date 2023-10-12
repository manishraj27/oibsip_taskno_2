document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

function convertTemperature() {
    
    const temperatureInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;

  
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

   
    let convertedTemperature;
    if (unitInput === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
    } else if (unitInput === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
    }

   
    const resultArea = document.getElementById('result');
    resultArea.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${unitInput.toUpperCase()}`;
}
