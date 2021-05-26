function sumaDosNumeros(primerNumero, segundoNumero){
    var res= primerNumero + segundoNumero;
    return res;

}
function restaDosNumeros(primerNumero, segundoNumero){
    var resta = primerNumero - segundoNumero;
    return resta;

}
function devuelveMasGrande(primerNumero, segundoNumero){
    var elMasGrande = Math.max(primerNumero, segundoNumero);
    return elMasGrande;

}
function esPar (numero){
    var num = numero%2;
    if (num == 0){
        return true;
    }else{
        return false;
    }
}
function esMayora20 (primerNumero, segundoNumero){
    var mayor20 = (primerNumero > segundoNumero);
    return mayor20;

}

function nombreCompleto (nombre, apellido){
    var nomCom = nombre + '  '+ apellido;
    return nomCom;

}
function capitalizar(palabra){
    var cap = palabra[0].toUpperCase() + palabra.slice(1);
    return cap;
    
}
function primeraPalabra(frase){
    var palabra = frase.split (" ", 1);
    return palabra;
}

console.log(sumaDosNumeros(4,2));
console.log(restaDosNumeros( 8,2));
console.log(devuelveMasGrande( 8,2));
console.log(esPar(4));
console.log(esMayora20(25, 21));
console.log(nombreCompleto("Jean", "Sandrea"));
console.log(capitalizar("pierre"));
console.log(primeraPalabra("como va todo"));



