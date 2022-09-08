/*
Crie um código que receba uma const numérica qualquer. 
Crie um `if` para verificar se o número guardado na const 
é **par**. Caso seja, imprima no console a mensagem: 
"o número é par".
*/

const num = Number(prompt("Digite um número qualquer"))
console.log(typeof(num))
if ((num % 2) === 0){
    console.log("Número é par");
} else {
    console.log("Número é ímpar");
}