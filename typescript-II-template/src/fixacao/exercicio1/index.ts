/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/
enum Cores {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELA = "Amarela",
  VERDE = "Verde",
  AZUL = "Azul",
  VIOLETA = "Violeta",
  ANIL = "Anil"
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores
}

const pessoa1: Pessoa = {
  nome: "Ludmila",
  idade: 28,
  corFavorita: Cores.VIOLETA
}

const pessoa2: Pessoa = {
  nome: "Rodrigo",
  idade: 29,
  corFavorita: Cores.LARANJA
}

const pessoa3: Pessoa = {
  nome: "Thaís",
  idade: 30,
  corFavorita: Cores.AZUL
}

console.table([pessoa1, pessoa2, pessoa3])
