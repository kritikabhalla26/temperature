function convertToCelsius() {
  let fahrenheitInput = document.getElementById('fahrenheit').value;
  let kelvinInput = document.getElementById('kelvin').value;

  if (fahrenheitInput === '' && kelvinInput === '') {
    return;
  }

  let celsiusOutput;
  if (fahrenheitInput !== '') {
    celsiusOutput = (parseFloat(fahrenheitInput) - 32) * (5 / 9);
    document.getElementById('celsius').value = celsiusOutput.toFixed(2);
  } else {
    celsiusOutput = parseFloat(kelvinInput) - 273.15;
    document.getElementById('celsius').value = celsiusOutput.toFixed(2);
  }
}

function convertToFahrenheit() {
  let celsiusInput = document.getElementById('celsius').value;
  let kelvinInput = document.getElementById('kelvin').value;

  if (celsiusInput === '' && kelvinInput === '') {
    return;
  }

  let fahrenheitOutput;
  if (celsiusInput !== '') {
    fahrenheitOutput = (parseFloat(celsiusInput) * (9 / 5)) + 32;
    document.getElementById('fahrenheit').value = fahrenheitOutput.toFixed(2);
  } else {
    fahrenheitOutput = (parseFloat(kelvinInput) - 273.15) * (9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheitOutput.toFixed(2);
  }
}

function convertToKelvin() {
  let celsiusInput = document.getElementById('celsius').value;
  let fahrenheitInput = document.getElementById('fahrenheit').value;

  if (celsiusInput === '' && fahrenheitInput === '') {
    return;
  }

  let kelvinOutput;
  if (celsiusInput !== '') {
    kelvinOutput = parseFloat(celsiusInput) + 273.15;
    document.getElementById('kelvin').value = kelvinOutput.toFixed(2);
  } else {
    kelvinOutput = (parseFloat(fahrenheitInput) - 32) * (5 / 9) + 273.15;
    document.getElementById('kelvin').value = kelvinOutput.toFixed(2);
  }
}

function resetFields() {
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('kelvin').value = '';
}


document.getElementById('celsius').addEventListener('input', function() {
  convertToFahrenheit();
  convertToKelvin();
});
document.getElementById('fahrenheit').addEventListener('input', function() {
  convertToCelsius();
  convertToKelvin();
});
document.getElementById('kelvin').addEventListener('input', function() {
  convertToCelsius();
  convertToFahrenheit();
});