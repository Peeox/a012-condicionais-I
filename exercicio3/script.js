/*
Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a 
nacionalidade guardada na const `nacionalidade` é igual a cada uma 
das nacionalidades acima, e caso seja, imprima a nacionalidade no console. 
O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de 
`nacionalidade` não corresponda a nenhum dos valores.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
*/

/* ESTÁ CERTO
const nacionalidade = prompt("Qual é a sua nacionalidade?")

if (nacionalidade.toLowerCase() === "brasileira" ||
nacionalidade.toLowerCase() === "argentina" ||
nacionalidade.toLowerCase() === "uruguaia" ||
nacionalidade.toLowerCase() === "chilena" || 
nacionalidade.toLowerCase() ==="colombiana"){
        console.log(`Sua nacionalidade é ${nacionalidade.toLocaleLowerCase()}`)
    } else{ 
        console.log("Nacionalidade não encontrada")
    }
*/

/* ESTÁ CERTO

const nacionalidade = prompt("Qual é a sua nacionalidade?")

if (nacionalidade.toLowerCase() === "brasileira"){
    console.log("Sua nacionalidade é brasileira")
} else if (nacionalidade.toLowerCase() === "argentina"){
    console.log("Sua nacionalidade é argentina")
} else if (nacionalidade.toLowerCase() === "uruguaia"){
    console.log("Sua nacionalidade é uruguaia")
} else if (nacionalidade.toLowerCase() === "chilena"){
    console.log("Sua nacionalidade é chilena")
} else if (nacionalidade.toLowerCase() === "colombiana"){
    console.log("Sua nacionalidade é colombiana")
}else {
    console.log("Por favor digite corretamente")
}
*/

// Teste com switch - funciona perfeitamente


let nacionalidade;

const perguntaNacionalidade = 
prompt("Qual é a sua nacionalidade?").toLowerCase();

switch(perguntaNacionalidade){
    case "brasileira":
    console.log(nacionalidade = "Sua nacionalidade é brasileira")
    break;
    case "argentina":
    console.log(nacionalidade = "sua nacionalidade é argentina")
    break;
    case "uruguaia":
    console.log(nacionalidade = "sua nacionalidade é uruguaia")
    break;
    case "colombiana":
    console.log(nacionalidade = "sua nacionalidade é colombiana")
    break;
    case "chilena":
    console.log(nacionalidade = "sua nacionalidade é chilena")
    break;
    default:
        console.log("Por favor digite a nacionalidade correta")

}
