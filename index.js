// Code your solution in this file.
// function lowerCaseDrivers(drivers,newDrivers) {
//     const newDrivers = [];
//     newDrivers.push(drivers.map(function(name){
//                         return name.toLowerCase();
//                     }))
    
//     return newDrivers;
    
// }

function lowerCaseDrivers(drivers) {
    return drivers.map(function(name) {
      return name.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        const driverFirstName = driver.split(' ')[0];
        const driverLastName = driver.split(' ')[1];

        return {firstName:driverFirstName, lastName:driverLastName};

    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    })
}