function verificarIdade(){

    nomeU = document.getElementById("nome").value;
    anoIni = document.getElementById("anonasc").value;
    anoF = document.getElementById("anoatual").value;

    parseInt(anoIni)
    parseInt(anoF)

    idade = anoF - anoIni;

    if(idade >18){
        alert(`${nomeU} você é maior de idade`)
    }
    else{
        alert(`${nomeU} você é menor de idade`)
    }
}