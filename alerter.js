const {expect} = require('chai');

let alertFailureCount = 0;
let celciusThreshold = 200;
function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    if (celciusThreshold >= celcius) {
            return 200;
    } else {
            return 500;
    }
}

convertFareinheitToCelcius = (farenheit) => {
  return (farenheit - 32) * 5 / 9;
}

function alertInCelcius(farenheit, callback) {
    const celcius = convertFareinheitToCelcius(farenheit);
    const returnCode = callback(celcius);
    if (returnCode != 200) {
        alertFailureCount += 1;
    }
}

alertInCelcius(400.5,networkAlertStub);
expect(alertFailureCount).equals(1);
alertInCelcius(303.6, networkAlertStub);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
