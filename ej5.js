function area(radio){
    var pi=3.14159;
    var area=pi*(radio**2);
    if(radio<=0){
        return -1;
    }else{
        return area;
    }
}