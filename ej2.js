
function ordenamiento(arr) {

    let long = arr.length;
    let value;
    let i; 
    let j;

    for (i = 1; i < long; i++) {

        value = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = value
    }

    return arr      

}