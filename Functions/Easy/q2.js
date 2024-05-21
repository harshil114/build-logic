function areaOfHexagon(side){
    const area = (3 * Math.sqrt(3) /2 )*side*side
    return area;
}
console.log(areaOfHexagon(10).toFixed(2));