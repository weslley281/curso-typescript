const nome: string = 'Weslley';
console.log('Nome: ' + nome);

let idade: Number = 27;
console.log('Idade: ' + idade);

let gostaDeProgramcao: boolean = true;
console.log('Gosta de Programação ?' + gostaDeProgramcao ? 'Sim' : 'Não');

let frase: any = 'Sei lá';

let hobbies: Array<string> = ['Artes Marciais', 'Passear com cachorro', 'Ler'];
console.log(hobbies);

let endereco: [string, number] = ['Rua Diego Botelho', 366];
console.log(endereco);

console.log(typeof idade);
console.log(typeof nome);
console.log(typeof gostaDeProgramcao);
console.log(typeof frase);
console.log(typeof hobbies);
console.log(typeof endereco);

enum Cor {
  Cinza,
  Verde,
  Azul,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(typeof Cor);
console.log(typeof minhaCor);
