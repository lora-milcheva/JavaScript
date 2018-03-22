
function distance(input) {

    let firstVehicleSpeed = input[0];
    let secondVehicleSpeed = input[1];
    let time = input[2] / 3600;

    let distanceKm = Math.abs((firstVehicleSpeed * time) - (secondVehicleSpeed * time));

    console.log(distanceKm * 1000);
}

distance([5, -5, 40])