// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById('missionTarget').innerHtml = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {

    if(testInput=== ''){
        return 'Empty';
    }
    if(isNaN(testInput)){
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
    
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // console.log(validateInput(pilot));
    // console.log(validateInput(copilot));
    // console.log(validateInput(fuelLevel));
    // console.log(validateInput(cargoLevel));
    if(validateInput(pilot)!== 'Not a Number' || validateInput(copilot)!== 'Not a Number' || validateInput(fuelLevel) !== 'Is a Number' || validateInput(cargoLevel) !== 'Is a Number'){
        alert('Make sure to enter valid information in each field.');
        
    } 
    else if(fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById('faultyItems').style.visibilty = 'visible';
        document.getElementById('launchStatus').innerText = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'red';
        document.getElementById('faultyItems').innerHtml = `
            <ol>
                <li>Pilot ${pilot} is ready for launch</li>
                <li>Co-ilot ${copilot} is ready for launch</li>
                <li>Fuel level to low for launch</li>
                <li>Cargo mass to high for launch</li>
            </ol>`;
    }
    else if(fuelLevel < 10000) {
        document.getElementById('faultyItems').style.visibilty = 'visible';
        document.getElementById('launchStatus').innerText = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'red';
        document.getElementById('faultyItems').innerHtml = `
            <ol>
                <li>Pilot ${pilot} is ready for launch</li>
                <li>Co-ilot ${copilot} is ready for launch</li>
                <li>Fuel level to low for launch</li>
                <li>Cargo mass low enough for launch</li>
            </ol>`;
     }
    else if(cargoLevel > 10000) {
        document.getElementById('faultyItems').style.visibilty = 'visible';
        document.getElementById('launchStatus').innerText = 'Shuttle Not Ready for Launch';
        document.getElementById('launchStatus').style.color = 'red';
        document.getElementById('faultyItems').innerHtml = `
               <ol>
                    <li>Pilot ${pilot} is ready for launch</li>
                    <li>Co-ilot ${copilot} is ready for launch</li>
                    <li>Fuel level high enough for launch</li>
                    <li>Cargo mass to high for launch</li>
                </ol>`;
     }
     else  {
        document.getElementById('faultyItems').style.visibilty = 'visible';
        document.getElementById('launchStatus').innerText = 'Shuttle is Ready for Launch';
        document.getElementById('launchStatus').style.color = 'green';
        document.getElementById('faultyItems').innerHtml = `
               <ol>
                    <li>Pilot ${pilot} is ready for launch</li>
                    <li>Co-ilot ${copilot} is ready for launch</li>
                    <li>Fuel level high enough for launch</li>
                    <li>Cargo mass low enough for launch</li>
                </ol>`;
     }
}
   


async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {return response.json()});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetNumber = Math.floor(Math.random() * planets.length);
    return planets[planetNumber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
