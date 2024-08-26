import GenerarNumeroFizzBuzz from "./fizzbuzz.js"

function ImprimirSecuencia(lim) {
    for (let i = 1; i<=lim; i++){
        console.log(GenerarNumeroFizzBuzz(i));
    }
}

ImprimirSecuencia(25);
