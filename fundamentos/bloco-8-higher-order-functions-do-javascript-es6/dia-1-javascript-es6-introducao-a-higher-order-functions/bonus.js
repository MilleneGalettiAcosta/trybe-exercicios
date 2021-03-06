// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const damageDragon = (dragon) => {
    const min = 15;
    const max = dragon.strength;
    const dragonDamage = Math.floor((Math.random() * (max - min + 1) + min));
    return dragonDamage;
};

console.log(damageDragon(dragon));

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const damageWarrior = (warrior) => {
    const min = warrior.strength;
    const max = warrior.strength * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (max - min + 1) + min));
    return warriorDamage;
};

console.log(damageWarrior(warrior));

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const damageMage = (mage) => {
    const min = mage.intelligence;
    const max = min * 2;
    const mana = mage.mana;
    const turns = {
        manaSpent: 0,
        damageDealt: 'Não possui mana suficiente',
    };

    if (mana > 15) {
    const mageDamege = Math.floor((Math.random() * (max -min + 1) + min));
    turns.manaSpent = 15;
    turns.damageDealt = mageDamege;
    return turns;
    }
    return turns;
};

console.log(damageMage(mage));

// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.

const gameActions = {
 // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

turnWarrior: (damageWarrior) => {
  const damageW = damageWarrior(warrior);
  warrior.damage = damageW;
  const result = dragon.healthPoints - damageW;
  return result;
  },

  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

  turnMage: (damageMage) => {
  const mageInfo = damageMage(mage);
  const damageM = mageInfo.damageDealt;
  const { manaSpent} = mageInfo;
  mage.damage = damageM;
  mage.mana -= manaSpent;
  const result = dragon.healthPoints - damageM;
  return result;
  },

//   3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

turnDragon: (damageDragon) => {
  const damageD = damageDragon(dragon);
  dragon.damage = damageD;
  const healthWarrior = warrior.healthPoints - damageD;
  const healthMage = mage.healthPoints - damageD;
  return `Vida do guerreiro: ${healthWarrior} e vida do mago: ${healthMage}`;
  },
  
//   4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  turnResult: () => battleMembers,
};

console.log(gameActions.turnWarrior(damageWarrior));
console.log(gameActions.turnMage(damageMage));
console.log(gameActions.turnDragon(damageDragon));
console.log(gameActions.turnResult());