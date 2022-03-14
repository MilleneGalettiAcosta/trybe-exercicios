const readline = require('readline-sync');

function velocidadeMedia () {
  const distancia = readline.questionInt('Qual a sua distância percorrida (m)');
  const tempo = readline.questionInt('Qual seu tempo (s)');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

velocidadeMedia();