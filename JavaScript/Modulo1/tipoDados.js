// a variável nome será do tipo String
// a variável salario será do tipo Number
// a variável idade será do tipo Number
// a variável temDiploma será do tipo Boolean

let nome = "Fernando Almeida";
let salario = 0.00;
let idade = 44;
let temDiploma = false;

if (temDiploma === true) {
  console.log(
    ` O usuário ${nome} de idade ${idade} anos, recebe salário R$ ${salario} e possui diploma!`
  );
} else {
  console.log(
    ` O usuário ${nome} de idade ${idade} anos, recebe salário R$ ${salario} e não possui diploma!`
  );
}