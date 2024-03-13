const cubeChecker = (volume, side) => (Math.cbrt(volume) === side  && side > 0) ? true :false;



console.log(cubeChecker(-8,-2))