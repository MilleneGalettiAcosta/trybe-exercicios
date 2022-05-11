var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, base, conversion) {
    var fromIndex = units.indexOf(base);
    var toIndex = units.indexOf(conversion);
    var exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
var result = convert(0.001, "km", "Quilômetro");
console.log(result);
