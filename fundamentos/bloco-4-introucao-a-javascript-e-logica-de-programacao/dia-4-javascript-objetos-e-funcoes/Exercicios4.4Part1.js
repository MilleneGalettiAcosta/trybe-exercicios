let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// //   exercicio 1
// console.log("Bem-vinda, " + info.personagem);

// exercicio2
info.recorrente = "Sim";

// console.log(info);

// // exercicio 3
// for (let key in info){
//     console.log(key)
// };

// // exercicio 4
// for (let key in info){
//     console.log(info[key])
// };

// exercicio 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente : "Sim"
  };

for (let informacoes in info) {
    if (
        info[informacoes] === 'Sim' && info2[informacoes] === 'Sim'
    ) {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[informacoes] + " e " + info2[informacoes]);
    }
    
}