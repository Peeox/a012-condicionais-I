/*const bool1 = false
const bool2 = true
*/

/*
parte 1
if(bool1 === true) {
    alert("entrou no if!")   
} else {
    alert("entrou no else!")
}
*/

/*
parte 2
const bool3 = true

if (bool1 !== bool2){
    alert("São iguais 1 e 2")
} else if (bool3 === bool2){
    alert("São iguais 2 e 3")
} else {
    alert("Não existe valores iguais")
}
*/

/*
const idade = prompt("Qual sua idade?")

if (idade >= 18 && idade < 61){
    console.log("Pode tirar título")
} else if ((16 <= idade && idade < 18)  || idade >= 61){
    console.log("É facultativo")
} else {
    console.log("Não pode tirar título")
}
*/

const media = Number(prompt("Indique a média"));

if (media >= 5 && media <= 10) {
  console.log("aprovado");
} else if (media >= 3 && media < 5) {
  console.log("recuperação");
} else if (media < 3 && media >= 0) {
  console.log("reprovado");
} else console.log("Dados inválidos");
