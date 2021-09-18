function findMatching(drivers, name) {
    const newDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return newDrivers
}

function fuzzyMatch(drivers, string) {
    let fuzzyDrivers = string.length;
    return drivers.filter(function(f) {
        return f.slice(0, fuzzyDrivers) === string;
    });
}

function matchName(match, name) {
    return match.filter(function(f) {
        return f.name.toLowerCase() === name.toLowerCase();
    });

}




