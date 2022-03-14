const PESO = 55;
const ALTURA = 167;

function calculaIMC () { 
  const peso = PESO;
  const altura = ALTURA;

  console.log(`Péso: ${peso}, Altura: ${altura}`);

  const imc = (peso/ Math.pow(altura/100, 2)).toFixed(2);

  console.log(`ÌMC: ${imc}`);
}

calculaIMC();

// No terminal executar node imc.js para resultado