
function checkSpeed([speed, zone]) {
    
    let speedLimit = getSpeedLimit(zone);
    let currentSpeed = checkCurrentSpeed(speed, speedLimit);

    if (currentSpeed) {
        console.log(currentSpeed);
    }

    function getSpeedLimit(zone) {
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function checkCurrentSpeed(speed, limit) {

        let overSpeed = speed - speedLimit;

        if (overSpeed <= 0) {
            return false;
        }
        else {
            if (overSpeed <= 20) {
                return 'speeding';
            }
            else if (overSpeed <= 40) {
                return 'excessive speeding';
            }
            else {
                return 'reckless driving';
            }
        }
    }
}

checkSpeed([120, 'interstate']);