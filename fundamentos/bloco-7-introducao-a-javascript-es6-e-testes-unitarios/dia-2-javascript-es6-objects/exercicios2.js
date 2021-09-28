const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

let modifedObject = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return objeto
} 

console.log(modifedObject(lesson2, 'turno', 'noite'));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysObject = (objeto) => console.log(Object.keys(objeto));

keysObject(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.

const sizeObject = (objeto) => console.log(Object.keys(objeto).length);

sizeObject(lesson2);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueObjects = (objeto) => console.log(Object.values(objeto));

valueObjects(lesson1);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudants(objeto) {
   let total = 0;
   const array = Object.keys(objeto);
   for (index in array) {
       total += objeto[array[index]].numeroEstudantes;
   }
   return total;
};

console.log(totalStudants(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const getValueByNumber = (objeto, index) => Object.values(objeto)[index];


console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(objeto, chave, valor) {
   
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));