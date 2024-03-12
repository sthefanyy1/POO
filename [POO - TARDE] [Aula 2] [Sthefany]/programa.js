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
    quilometragem: 100000,
    potenciaMotor: '1.6',
    cor: 'Branco',
    preco: 37000 
}

let carro2 = {
    modelo: 'Up',
    marca: 'Vokswagen',
    ano: 2015,
    quilometragem: 124852,
    potenciaMotor: '1.0',
    cor: 'Branco',
    preco: 38000
}

let carro3 = {
  modelo: 'Ka',
  marca: 'Ford',
  ano: 2020,
  quilometragem: 38000,
  potenciaMotor: '1.0',
  cor: 'Prata',
  preco: 47990
}

let carro4 = {
    modelo: 'Duster',
    marca: 'Renault',
    ano: 2016,
    quilometragem: 1,
    potenciaMotor: '2.0',
    cor: 'Prata',
    preco: 58900
}

let carro5 = {
    modelo: 'Argo',
    marca: 'Fiat',
    ano: 2022,
    quilometragem: 65000,
    potenciaMotor: '1.0',
    cor: 'Branco',
    preco: 63000
}

let carro6 = {
    modelo: 'Tucson',
    marca: 'Hyunday',
    ano: 2015,
    quilometragem: 15000,
    potenciaMotor: '2.0',
    cor: 'Prata',
    preco: 55000
}

let carro7 = {
    modelo: 'Compass',
    marca: 'Jeep',
    ano: 2021,
    quilometragem: 47828,
    potenciaMotor: '2.0',
    cor: 'Branco',
    preco: 154990
}

let carro8 = {
    modelo: 'Aircross',
    marca: 'Citroen',
    ano: 2018,
    quilometragem: 48000,
    potenciaMotor: '1.6',
    cor: 'Branco',
    preco: 47000
}

console.log(`CARROS ------------------------------------------`);
console.log(`${carro1.marca} ${carro1.modelo} ${carro1.ano} --> R$ ${carro1.preco}`);
console.log(`${carro2.marca} ${carro2.modelo} ${carro2.ano} --> R$ ${carro2.preco}`);
console.log(`${carro3.marca} ${carro3.modelo} ${carro3.ano} --> R$ ${carro3.preco}`);
console.log(`${carro4.marca} ${carro4.modelo} ${carro4.ano} --> R$ ${carro4.preco}`);
console.log(`${carro5.marca} ${carro5.modelo} ${carro5.ano} --> R$ ${carro5.preco}`);
console.log(`${carro6.marca} ${carro6.modelo} ${carro6.ano} --> R$ ${carro6.preco}`);
console.log(`${carro7.marca} ${carro7.modelo} ${carro7.ano} --> R$ ${carro7.preco}`);
console.log(`${carro8.marca} ${carro8.modelo} ${carro8.ano} --> R$ ${carro8.preco}`);



let listaDeCarros = [];
listaDeCarros.push(carro1);
listaDeCarros.push(carro2);
listaDeCarros.push(carro3);
listaDeCarros.push(carro4);
listaDeCarros.push(carro5);
listaDeCarros.push(carro6);
listaDeCarros.push(carro7);
listaDeCarros.push(carro8);

console.log(`CARROS usando for ------------------------------`);
for (let i = 0; i < listaDeCarros.length; i++) {
    console.log(`${listaDeCarros[i].marca} ${listaDeCarros[i].modelo} ${listaDeCarros[i].ano} --> R$ ${listaDeCarros[i].preco}`);
}

