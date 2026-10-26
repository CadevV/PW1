function fazerPrimos(){
    nl = document.getElementById("numP").value;
    let primo = 0
    for(let i = 0; i<=nl; i++){
        if(nl % i == 0){
            primo++
        }
    }

    if(primo == 2){
        alert(`Numero Primo ${nl}`);
    }
    else{
        alert(`Nùmero não é primo`);
    }
    
}