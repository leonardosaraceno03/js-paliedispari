let scelta = prompt("Digita 'Pari' o 'Dispari'")
let somma = 0;
var numeroPlayer = 0;
var numeroCPU = 0;
if(scelta == "pari"){
    console.log(`hai scelto : ${scelta}`);
    sceltaNumeroPlayer();
    generatoreNumeroRandom();
    sommaNumeri();
    if(sommaNumeri % 2 == 0){
        console.log("Hai vinto!")
    }else{
        console.log("Hai perso!")
    }
}else if(scelta == "dispari"){
    console.log(`hai scelto : ${scelta}`);
    sceltaNumeroPlayer();
    generatoreNumeroRandom();
    sommaNumeri();
    if(sommaNumeri % 2 !== 0){
        console.log("Hai vinto!")
    }else{
        console.log("Hai perso!")
    }
}else{
    console.log("ci sei o ci fai?")
}




function sommaNumeri(){
    somma = (numeroPlayer + numeroCPU);
    console.log(`la somma è : ${somma}`)
}
function sceltaNumeroPlayer(){
    numeroPlayer = prompt("Digita un numero da 1 a 5")
    console.log(numeroPlayer)

}

function generatoreNumeroRandom(){
    numeroCPU = Math.round(Math.random() * 5) + 1;
    console.log(numeroCPU)
}