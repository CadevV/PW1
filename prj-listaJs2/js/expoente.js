function fazerExpoente() {
    n1 = document.getElementById("base").value;
    n2 = document.getElementById("expoente").value;
    total = 1;
    q = "";

    document.write(`Base: ${n1}`);
    document.write(`<br /> Expoente: ${n2} <br />`);

    for(let i = 1; i <= n2; i++){
    total = total * n1;

        if(i == 1){
            document.write(`${n1}`)
        }
        else{
            document.write(` * ${n1}`);
        }
    }
    document.write(` = ${total}`);
}