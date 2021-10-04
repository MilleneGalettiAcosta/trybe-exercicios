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
