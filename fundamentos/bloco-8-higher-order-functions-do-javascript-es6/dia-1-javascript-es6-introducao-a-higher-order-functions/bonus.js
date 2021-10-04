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
