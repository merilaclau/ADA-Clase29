let variableNumPrompt = prompt("Ingresar edad");
typeof variableNumPrompt
"string"

//Prueba 1 - NO FUNCIONA - Sin comillas en el argumento//
let variableNumPrompt = prompt(Ingresar edad);
//Error por consola: VM376:1 Uncaught SyntaxError: missing ) after argument list//

//Prueba 2 - NO FUNCIONA - Sin argumento//
let variableNumPrompt = prompt();
undefined
typeof variableNumPrompt
"string"

//Prueba 3 - OK! - Usando parseInt//
let variableNumPrompt = parseInt(prompt("Ingresar número preferido"))
undefined
typeof variableNumPrompt
"number"

console.log("algo"); //Te muestra el valor por consola
typeof //Te muestra el tipo de variable
alert("algo"); //Te abre un pop up con ese mensaje
let //Declara variable
const //Declara constante
