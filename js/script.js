// INSERISCI IL NUMERO DI KM DA PERCORRERE

let km= parseInt(prompt('Inserisci il numero di km da percorrere'));
console.log(km)

// INSERISCI LA TUA ETA'

let eta= parseInt(prompt('Inserisci la tua età'));
console.log(eta)


// CALCOLARE IL PREZZO DEL VIAGGIO

let costo_biglietto= km * 0.21

// CALCOLARE GLI SCONTI

let sconto_minorenni= costo_biglietto * 0.8
let sconto_over= costo_biglietto * 0.6

if (eta < 18){
  costo_biglietto= Math.round(sconto_minorenni * 100.0) / 100.0;
  console.log(costo_biglietto)
  
}

else if (eta > 65){
    costo_biglietto= Math.round(sconto_over * 100.0) / 100.0;
    console.log(costo_biglietto)
}

else {
    console.log(costo_biglietto)
}

// MOSTRO A SCHERMO IL PREZZO DEL BIGLIETTO *BONUS*

document.getElementById('prezzo_biglietto').innerHTML= ('Il prezzo del biglietto è di' + " " + costo_biglietto + '€')
