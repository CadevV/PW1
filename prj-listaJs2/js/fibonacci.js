function fazerFibonacci(){
    nt = document.getElementById("fb").value;
    an = 1;
    at = 1;

    for(let i = 1; i <= nt; i++){
        if(i == 1){
            document.write(`${at}`);
        }
        document.write(`<br /> ${at}`);
         p = an + at;
         an = at;
         at = p;
    }
}