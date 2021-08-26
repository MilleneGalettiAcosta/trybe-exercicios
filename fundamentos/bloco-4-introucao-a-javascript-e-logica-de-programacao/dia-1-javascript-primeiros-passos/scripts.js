// Exercicio 1
const a = 10;
const b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// Exercicio 2
const c = 20;
const d = 45;

if(c>d) {
  console.log("O valor c é maior");
} else {
  console.log("O valor d é maior");
}
// Exercicio 3
if(a>b && a>c) {
    console.log("A é maior")
} else if(b>a && b>c) {
    console.log("B é maior")
} else {
    console.log("C é o maior")
}
// Exercício 4
const valor = 60;

if(valor=== 60) {
    console.log("positive");
} else if(valor === 0) {
    console.log("zero");
} else {
    console.log("negative")
}
// Exercício 5
const angulo1 = 50;
const angulo2 = 40;
const angulo3 = 90;

if(angulo1+angulo2+angulo3 === 180) {
    console.log(true)
} else {
    console.log(false)
}
// Exercicio 6
const pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
// Exercicio 7
const notaDoAluno = 10;

switch(notaDoAluno) {
    case notaDoAluno >= 90:
        console.log("A");
        break;

    case notaDoAluno >= 80:
        console.log("B");
        break;

    case notaDoAluno >= 70:
        console.log("C");
        break;

    case notaDoAluno >= 60:
        console.log("D");
        break;

    case notaDoAluno >= 50:
        console.log("E");
        break;

    case notaDoAluno < 50:
        console.log("F");
        break;

        default:
            console.log("error");
}
// Exercicio 8
if(a%2||b%2||c%2) {
    console.log(true);
} else {
    console.log(false);
}

// Bônus 8
let par = false
if(a%2||b%2||c%2) {
    par = true;
};
console.log(par)

// Exercicio 9
if(a%2 !== 0||b%2 !== 0||c%2 !== 0) {
    console.log(true);
} else {
    console.log(false)
}

// Bônus 9
let impar = false
if(a%2 !==0||b%2 !==0||c%2 !==0) {
    impar = true;
};
console.log(impar);

// Exercicio 10
const custoProduto = 156;
const valorVenda = 439;

let imposto = 20*custoProduto/100;
// custoProduto*1.2 - diminuiria uma variavel
const custoTotal = custoProduto + imposto;
let lucro = valorVenda - custoTotal;

if(custoProduto <= 0 || valorVenda <= 0) {
    console.log("Erro");
} else {
    console.log(lucro*1000);
}
// EXercicio 11
let inss; 
let impostoRenda;
let salarioBruto = 3000.00;

if(salarioBruto <= 1556.94) {
      console.log(inss=salarioBruto*0.08);
} else if (salarioBruto <= 2594.92){
  console.log(inss=salarioBruto*0.09);
} else if (salarioBruto <= 5189.92) {
  console.log(inss = salarioBruto*0.11)
} else {
    console.log(inss=570.88)
};

console.log(salarioBase = salarioBruto - inss);

if(salarioBase <=2826.65) {
    console.log(impostoRenda = salarioBase*0.075-142.80);
} else if(salarioBase <= 3751.05) {
    console.log(impostoRenda = salarioBase*0.15-354,80);
} else if(salarioBase <= 4664.68) {
    console.log(impostoRenda = salarioBase*0.225-636,13);
} else if(salarioBase > 4664.68) {
    console.log(impostoRenda = salarioBase*0.275-869.36);
} else {
    console.log(impostoRenda = 0.00);
};
console.log(salarioLiquido = salarioBase -impostoRenda);