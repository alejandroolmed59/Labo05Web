function bisiesto(annio){
    if((annio % 4 == 0 && annio % 100 != 0) || annio % 400 == 0){
        return true;
    }else{
        return false;
    }
}