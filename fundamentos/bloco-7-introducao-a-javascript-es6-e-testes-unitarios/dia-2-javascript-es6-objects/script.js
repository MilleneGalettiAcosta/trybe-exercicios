// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function createObject(objeto, chave, valor) {
     objeto = new Object();
     let newKey = chave;
     const value = valor;
     objeto[newKey] = value;
     
     return objeto;
};

console.log(createObject('student', 'name', 'Millene'));

let newObject = (object,key,value) => {
    object[key] = value;
    return object
}

console.log(newObject({}, 'Nome','Millene'))

// criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', 
//   };

// const showObject = (student) => {
//     const newHabilit = Object.keys(student);
//     for (const key in newHabilit) {
//         console.log(`${newHabilit[key]}, Nível: ${student[newHabilit[key]]}`);
//     }
// };

// console.log('Estudante 1');
// showObject(student1);

// console.log('Estudante 2');
// showObject(student2);


