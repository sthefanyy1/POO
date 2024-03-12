let alunos = ['João', 'Maria', 'José', 'Pedro', 'Paulo'];

alert(alunos[3]);

alunos[4] = 'Gerson';

alunos.push('Joaquim');

let notas = [10, 8, 5, 7, 9, 6];

for(let i = 0; i < alunos.length; i++){
    console.log(`Aluno: ${alunos[i]} -> Nota: ${notas[i]} `)
}

//Criação de objetos

let aluno1 = {
    nome: 'João', 
    cpf: '00000000000', 
    nota: 10
}

let aluno2 = {
    nome: 'Maria',
    cpf: '11111111111',
    nota: 8
}

let aluno3 = {
    nome: 'José',
    cpf: '22222222222',
    nota: 5
}

let aluno4 = {
    nome: 'Pedro',
    cpf: '33333333333',
    nota: 7
}

let aluno5 = {
    nome: 'Paulo',
    cpf: '44444444444',
    nota: 9
}

let aluno6 = {
    nome: 'Joaquim',
    cpf: '55555555555',
    nota: 6
}

//Acessando atributos de um objeto
//Em um array, a gente acessa um elemento através dos colchetes [] e do índice.
//Em um objeto, a gente usa ponto . e o nome do atributo.

console.log(aluno6.nome);
console.log(aluno6.cpf);
console.log(aluno6.nota);

console.log(aluno1.nome);
aluno1.nome = 'John';
console.log(aluno1.nome);

//Atividade carro usado  

let carro1 = {
    modelo: 'Cross Fox',
    marca: 'Vokswagen',
    ano: 2011,
    quilometragem: 100.000,
    potenciaMotor: 1.6,
    cor: 'Branco',
    preco: 37.000 
}

let carro2 = {
    modelo: 'Up',
    marca: 'Vokswagen',
    ano: 2015,
    quilometragem: 124.852,
    potenciaMotor: 1.0,
    cor: 'Branco',
    preco: 38.000
}

let carro3 = {
  modelo: 'Ka',
  marca: 'Ford',
  ano: 2020,
  quilometragem: 38.000,
  potenciaMotor: 1.0,
  cor: 'Prata',
  preco: 47.990
}

let carro4 = {
    modelo: 'Duster',
    marca: 'Renault',
    ano: 2016,
    quilometragem: 1,
    potenciaMotor: 2.0,
    cor: 'Prata',
    preco: 58.900
}

let carro5 = {
    modelo: 'Argo',
    marca: 'Fiat',
    ano: 2022,
    quilometragem: 65.000,
    potenciaMotor: 1.0,
    cor: 'Branco',
    preco: 63.000
}