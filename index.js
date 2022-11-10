// Code your solution here
function findMatching(names,string) {
    const stringDriver = string.toUpperCase()
    const driverNames = names.filter (driver => driver.toUpperCase() === stringDriver)
    return driverNames
    }



function fuzzyMatch(names,string) {
    const fuzzyDrivers = names.filter(function(driver) {
        return driver.startsWith(string)
    })
    return fuzzyDrivers
}

function matchName(driverObjects,string) {
    const matchedDrivers = driverObjects.filter(function(driver) {
        return driver.name === string
    })
    return matchedDrivers
}