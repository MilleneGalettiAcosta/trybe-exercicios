const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, base: string, conversion: string): number {

  const fromIndex = units.indexOf(base);

  const toIndex = units.indexOf(conversion);

  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent)
}

const result = convert(0.001, "km","Quilômetro");

console.log(result);