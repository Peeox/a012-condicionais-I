/*
Escreva um código que receba três valores. Uma idade, 
um booleano que responda se a pessoa terminou ou não o ensino médio, 
e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` 
para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>
*/

let idade = prompt("Qual a sua idade?");
let terminou = confirm("Terminou o ensino médio?");
let cursandoFaculdade = confirm("Está cursando uma faculdade?");

if (idade >= 18) {
  console.log("A pessoa é maior de idade");
} else {
  console.log("A pessoa é menor de idade");
}

if (terminou) {
  console.log("Terminou o ensino médio");
} else {
  console.log("Não terminou o ensino médio");
}

if (cursandoFaculdade) {
  console.log("Está cursando faculdade");
} else {
  console.log("Não cursa nada");
}
