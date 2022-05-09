
import { exit } from "process";
import readline from "readline-sync";
import months from './months';
import estacoes from './estacao'

const monthsNames = Object.values(months);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");

const estacaoHSul = {
  [estacoes.OUTONO]: [months.MAR, months.ABR, months.MAI,months.JUN], 
  [estacoes.INVERNO]: [months.JUN, months.JULHO, months.AGO, months.SET],
    [estacoes.PRIMAVERA]: [months.SET, months.OUT, months.NOV, months.DEZ],
    [estacoes.VERÃO]: [months.DEZ, months.JAN, months.FEV, months.MAR],
}

const estacaoHNorte = {
  [estacoes.PRIMAVERA]: estacaoHSul[estacoes.OUTONO],
    [estacoes.VERÃO]: estacaoHSul[estacoes.INVERNO],
    [estacoes.OUTONO]: estacaoHSul[estacoes.PRIMAVERA],
    [estacoes.INVERNO]: estacaoHSul[estacoes.VERÃO],
}

const hemisferio = {
  'Norte': estacaoHNorte,
  'Sul': estacaoHSul,
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemisferio), "Escolha um hemisfério");

const month = Object.values(months)[choiceMonth];

const hemiphere = Object.keys(hemisferio)[choiceHemisphere];