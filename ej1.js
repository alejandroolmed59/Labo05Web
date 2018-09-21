function palindrome (cadena){
    var longitud=cadena.length;
    for(var i=0; i<longitud ; i++){
        if(cadena[i]!=cadena[longitud-i-1]){
            return false;
        }
    }
    return true;
}