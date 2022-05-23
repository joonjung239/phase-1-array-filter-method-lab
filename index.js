const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,string) {
const newDrivers = 
drivers.filter(person => person.toLowerCase() === string.toLowerCase());
return newDrivers;
}
   
function fuzzyMatch(driver, string){
    return driver.filter(function(element) {
        return element.startsWith(string)
    })
}

function matchName(drivers, string){
    return drivers.filter(function(hometown){
      return hometown.name === string
    })
  }