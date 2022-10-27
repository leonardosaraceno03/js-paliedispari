let scelta = prompt("Digita 'Pari' o 'Dispari'")


if(scelta == "pari" || scelta == "dispari"){
    console.log(`hai scelto : ${scelta}`);
    let numeroPlayer = sceltaNumeroPlayer();
    let numeroCPU = generatoreNumeroRandom();
    console.log(numeroPlayer)
    console.log(numeroCPU)
    // Stampa somma
    let somma = sommaNumeri(numeroPlayer, numeroCPU);
    let risultato;
    if(somma % 2 == 0){
        risultato = "pari";
    }else{
        risultato = "dispari";
    }
    console.log(risultato)
    if(scelta == risultato){
        console.log("hai vinto")
    }else{
        console.log("hai perso")
    }


}else{
    console.log("ci sei o ci fai?")
}




function sommaNumeri(numeroPlayer, numeroCPU){
    let somma = (numeroPlayer + numeroCPU);
    console.log(`la somma è : ${somma}`)
    return somma;
}
function sceltaNumeroPlayer(){
    let numeroPlayer = parseInt(prompt("Digita un numero da 1 a 5"))
    
    return numeroPlayer;

}

function generatoreNumeroRandom(){
    let numeroCPU = Math.round(Math.random() * 5) + 1;
    
    return numeroCPU;
}