function fibo(numero) {
    if (numero <= 1) {
        return 1;
    }
    return fibo(numero - 1) + fibo(numero - 2);
}

function fiboAux(numero) {      //Usar esta funcion para encontrar serie hasta posicion n
    var array = [];
    if (numero >= 1) {      //Casos trivial 1
        array.push(0);
        if(numero==1){
            return array;
        }
    }
    if (numero >= 2) {       //Caso trivial 2
        array.push(1);
        if(numero==2){
            return array;
        }
       
    }
    if (numero >= 3) {
        numero=numero-2;
        for (i = 1; i <= numero; i++) {
            array.push(fibo(i))
        }
    }
    return array;
}