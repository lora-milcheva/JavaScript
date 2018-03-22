
function refineCystal(input) {

    let thicknessWanted = input[0];

    let calc = function(thickness, operation) { return operation(thickness) };
    let cut  = function(thickness) { return thickness / 4 };
    let lap = function(thickness) { return thickness * 0.8 };
    let grind = function(thickness) { return thickness - 20 };
    let etch = function(thickness) { return thickness - 2 };
    let xray = function(thickness) { return thickness + 1 };
    let transportAndWash = function(thickness) { return Math.floor(thickness) };

    for (let i = 1; i < input.length; i++) {

        let currentThickness = input[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness > thicknessWanted) {

            let count = 0;

            while (calc(currentThickness, cut) >= thicknessWanted) {
                currentThickness = calc(currentThickness, cut);
                count++;

                console.log(currentThickness);

                if (calc(currentThickness, cut) <= thicknessWanted) {
                    console.log('Cut x' + count);
                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Transporting and washing');
                    count = 0;
                }
            }

            while (calc(currentThickness, lap) >= thicknessWanted) {
                currentThickness = calc(currentThickness, lap);
                count++;

                console.log(currentThickness);

                if (calc(currentThickness, lap) < thicknessWanted) {
                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Lap x' + count);
                    console.log('Transporting and washing');
                    count = 0;
                }
                else if (calc(currentThickness, lap) == thicknessWanted) {
                    currentThickness = calc(currentThickness, lap);
                    count++;
                    console.log('Lap x' + count);

                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Transporting and washing');
                }
            }

            while (calc(currentThickness, grind) >= thicknessWanted) {
                currentThickness = calc(currentThickness, grind);
                count++;

                console.log(currentThickness);

                if (calc(currentThickness, grind) < thicknessWanted) {
                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Grind x' + count);
                    console.log('Transporting and washing');
                    count = 0;
                }
                else if (calc(currentThickness, grind) == thicknessWanted) {
                    currentThickness = calc(currentThickness, grind);
                    count++;
                    console.log('Grind x' + count);

                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Transporting and washing');
                }
            }

            while (calc(currentThickness, etch) >= thicknessWanted) {
                currentThickness = calc(currentThickness, etch);
                count++;

                console.log(currentThickness);

                if (calc(currentThickness, etch) == thicknessWanted) {
                    currentThickness = calc(currentThickness, etch);
                    count++;
                    console.log('Etch x' + count);
                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Transporting and washing');
                }
                else if (calc(currentThickness, etch) == thicknessWanted - 1){
                    currentThickness = calc(currentThickness, etch);
                    count++;
                    console.log('Etch x' + count);

                    currentThickness = calc(currentThickness, transportAndWash);
                    console.log('Transporting and washing');

                    currentThickness = calc(currentThickness, xray);
                    console.log('X-ray x' + 1);
                }
            }
        }

        console.log(`Finished crystal ${currentThickness} microns`);
    }
}

refineCystal([1480, 50000]);