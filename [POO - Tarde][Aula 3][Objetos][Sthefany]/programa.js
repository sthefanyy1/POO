let celular1 = {
    marca: 'Apple',
    modelo: 'Iphone 15 Pro Max',
    armazenamento: '256GB',
    ram: '8GB',
    processador: 'Chip A17 Pro',
    tipoTela: 'Super Retina XDR OLED',
    cor: 'Preto',
    bateria: 'Litio',
    preco: 8000
}

let celular2 = {
    marca: 'Motorola',
    modelo: 'Moto G14',
    armazenamento: '128GB',
    ram: '4GB',
    processador: 'Tiger T616',
    tipoTela: 'IPS LCD',
    cor: 'Grafite',
    bateria: 'LiPo',
    preco: 764
}

let celular3 = {
    marca: 'Xaomi',
    modelo:'Redimi 13',
    armazenamento: '128GB',
    ram: '6GB',
    processador: 'Octa-core',
    tipoTela: 'Oled',
    cor: 'Preto',
    bateria: 'LiPo',
    preco: 1089
}

let celular4 = {
    marca: 'Samsung',
    modelo:'A14',
    armazenamento: '128GB',
    ram: '4GB',
    processador: 'Exynos',
    tipoTela: 'PLS LCD',
    cor: 'Preto',
    bateria: 'LiPo',
    preco: 998
}

let celular5 = { 
    marca: 'Motorola',
    modelo:'E32',
    armazenamento: '64GB',
    ram: '4GB',
    processador: 'Octa-core',
    tipoTela: 'IPS LCD',
    cor: 'Azul',
    bateria: 'LiPo',
    preco: 896
}

let celular6 = {
    marca: 'Samsung',
    modelo:'S23 ultra',
    armazenamento: '512GB',
    ram: '12GB',
    processador: 'Qualcomm Snapdragon 8',
    tipoTela: 'Dynamic AMOLED 2X',
    cor: 'Verde',
    bateria: 'LiPo',
    preco: 5039
}

let celular7 = {
    marca: 'Xaomi',
    modelo:'14 Pro',
    armazenamento: '256GB',
    ram: '8GB',
    processador: 'Snapdragon 8 Gen 3',
    tipoTela: 'LTPO AMOLED',
    cor: 'Preto',
    bateria: 'LiPo',
    preco: 2502
}

let listaDeCelular = [];
listaDeCelular.push(celular1);
listaDeCelular.push(celular2);
listaDeCelular.push(celular3);
listaDeCelular.push(celular4);
listaDeCelular.push(celular5);
listaDeCelular.push(celular6);
listaDeCelular.push(celular7);

for (let i = 0; i < listaDeCelular.length; i++) {
    console.log(`${listaDeCelular[i].marca} ${listaDeCelular[i].modelo} ${listaDeCelular[i].armazenamento} ${listaDeCelular[i].ram} ${listaDeCelular[i].cor} --> R$ ${listaDeCelular[i].preco}`);
}