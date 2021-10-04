// const wakeUp = () => 'Acordando!!';

// const coffee = () => 'Bora tomar café!!';

// const sleep = () => 'Partiu dormir!!';

// const doingThings = (callback) => {
//     const string = callback();
//     console.log(string);
// };

// doingThings(wakeUp);
// doingThings(coffee);
// doingThings(sleep);


// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newPerson = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    // transforma nome com letra minúscula, separa e adiciona o _ para formatar o email.
    return { fullName, email: `${email}@trybe.com` };
};

console.log(newPerson('Millene Galetti'));

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
};

console.log(newEmployees(newPerson));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberCheck = (number, result) => number === result;

const getNumberRandom = (number, callback) => {
    let max = 5;
    let min = 1;
    let result = Math.floor((Math.random() * (max - min)) + min);
    return callback(number, result) ? 'Parabńes você ganhou' : 'Tente novamente';
};

console.log(getNumberRandom(3, numberCheck));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const correctAnswer = (rAnswer, uAnswer) => {
    if (rAnswer === uAnswer) {
        return 1;
      } if (uAnswer === 'N.A') {
        return 0;
      }
      return -0.5;
};

const hof = (RIGHT_ANSWERS, STUDENT_ANSWERS, correctAnswer) => {
    let result = 0;
    for (let index =0; index <RIGHT_ANSWERS.length; index += 1) {
        const correctAnswerReturn = correctAnswer(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        result += correctAnswerReturn;
    }
    return `Resultado final: ${result} corretas`;
};
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS,correctAnswer));

// Bônus
