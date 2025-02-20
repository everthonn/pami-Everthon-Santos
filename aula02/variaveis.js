var numero =2;
// var é visualizado por todo arquivo inclusive por blocos de codigo, caiu em desuso 
let texto = "hello";
// tipo usado nos dias atuais, se declarado dentro da função ele não sai da função 
const oQueEisso = "?";
// é visto globalmente ou seja pode ser visto e outros arquivos 
let NomeAluno = "Everthon";

//ponto e virgula é opicional! Boas práticas o usam

console.log('Tipo var:', numero);
//concatenar com virgula me garante um espaço 

numero = 13;

console.log(texto + " o numero agora é " + numero);
console.log(texto, "o numero agora é", numero);
console.log( `${texto}  " o numero agora é " + {numero}`);

texto = 69;

console.log(texto + numero);
// concatenar com + dois valores numericos vai 
// acabar somando 

// console.log(oQueEisso);

// Constantes não podem ter novos valores assinalados a ela

// oQueEisso = "uma constante????"

// console.log(oQueEisso);
