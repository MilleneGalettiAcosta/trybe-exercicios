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
