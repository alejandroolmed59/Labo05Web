function enteroABinario(entero){
    var aux;
    var cad_auxiliar="";
    while(entero>0){
        aux=entero%2;
        entero=Math.trunc(entero/2);
        if(aux%2==0){
            cad_auxiliar+="0";
        }else if(aux%2==1){
            cad_auxiliar+="1";
        }
    }
    cad_auxiliar=cad_auxiliar.split("").reverse().join("");
    return cad_auxiliar;
}