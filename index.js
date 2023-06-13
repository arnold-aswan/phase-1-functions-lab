// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let scuberHq = 42;
    let distance
    distance = Math.abs(street - scuberHq)
    return distance
}

function distanceFromHqInFeet(street) {
    let distance = distanceFromHqInBlocks(street) * 264;
    return distance
}

function distanceTravelledInFeet(start, destination) {
    let distance;
    distance = Math.abs((destination - start)* 264)
    return distance 
}

function calculatesFarePrice(start, destination) {
    // first 400 feet == free
    // distance of >400 && <=2000 feet : price == 2 cts per foot
        // not including 400 ft which is free
    // distance >2000 - >=2500 flat fare price 
    // distance >2500 : cannot travel that far
    let distance = distanceTravelledInFeet(start, destination);
    let charge;
    if (distance <= 400) {
        charge = 0
        return charge
    } else if (distance > 400 && distance <= 2000) {
        charge = ((distance - 400)* .02)
        return charge
    } else if (distance >=2000 && distance <= 2500) {
        charge = 25
        return charge 
    } else {
        return `cannot travel that far`
    }

}