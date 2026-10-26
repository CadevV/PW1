function fazerTabuada(){
    nt = document.getElementById("numero").value;

    for(let i = 1;i <11; i++){
        tabuada = nt * i;
       document.write(`<br /> ${nt} X ${i} = ${tabuada}`);
    }
}