var n1 = parseInt(prompt("Digite seu primeiro número:"));
var es = prompt("Escolha sua operação 1 - Soma, 2 - Subtração, 3 - Multiplicação e 4 - Divisão");
var n2 = parseInt(prompt("Digite seu segundo número:"));

switch(es){
    case "1":
        tt = n1 + n2;
    break;

    case "2":
        tt = n1 - n2;
    break;

    case "3":
        tt = n1 * n2;
    break;

    case "4":
        if (n2 == 0) {
            alert("Não é póssivel realizar divisão com o número 0.");
        }else{
            tt = n1 / n2;
        }
    break;

    default:
        alert("Operação inválida.");
}

    alert(` O resultado da operação é: ${tt}`);