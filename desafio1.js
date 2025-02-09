//Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
var nome = "Denilson da Silva Alves";

//Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
var idade = 25;
var altura = 1.75;

//Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
var preco = 50;
var desconto = 0.2;
var precoComDesconto = preco - (preco * desconto);
console.log(precoComDesconto);

//Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
var temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

//Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
var idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

//Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
var nota = Math.floor(Math.random() * 11);
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota <= 6) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes
var numero1 = Math.floor(Math.random() * 10);
var numero2 = Math.floor(Math.random() * 10);
if (numero1 == numero2) {
    console.log("Os números são iguais");
} else {    
    console.log("Os números são diferentes");
}

//Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
var nome = "Denilson da Silva Alves";
var idade = 23;
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

//Crie um loop que imprima os números de 1 a 10 na tela.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let numero;
do {
    numero = parseInt(prompt("Digite um número:"));
} while (numero !== 5);

console.log("Você digitou o número 5!")

//Crie um loop que imprima a tabuada do número 7, de 1 a 10.
for (var i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

//Crie um loop que exiba todos os números pares de 0 a 20.
    for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}
var area = calcularAreaCirculo(5);
console.log(area);

//Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
// Função para calcular a soma de dois números 
function somar(a, b) {
    return a + b;
}
console.log(somar(2, 3));

/*15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:*/

var numero1 = 10;var numero2 = 20;
var resultado = somar(numero1, numero2);
console.log(resultado);
function somar(a, b) {
    return a + b;
}

