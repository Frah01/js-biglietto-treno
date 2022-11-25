// INSERISCI IL NUMERO DI KM DA PERCORRERE

let km= parseInt(prompt('Inserisci il numero di km da percorrere'));
console.log(km)

// INSERISCI LA TUA ETA'

let eta= parseInt(prompt('Inserisci la tua età'));
console.log(eta)


// CALCOLARE IL PREZZO DEL VIAGGIO

let costo_base= km * 0.21

// CALCOLARE GLI SCONTI

let sconto_minorenni= costo_base * 0.8
let sconto_over= costo_base * 0.6

if (eta < 18){
  costo_base= Math.round(sconto_minorenni * 100.0) / 100.0;
  console.log(costo_base)
  
}

else if (eta > 65){
    costo_base= Math.round(sconto_over * 100.0) / 100.0;
    console.log(costo_base)
}

else {
    console.log(costo_base)
}

