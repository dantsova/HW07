function highAndLow(str){
    let arr = str.split(' ');
    let min = arr[0], max = arr[0];
    for(let i=1; i<arr.length; i++){
        max = arr[i]>max ?
            arr[i] : max;
        min = arr[i]<min ?
            arr[i] : min;
    }
    return [max, min].join(" ");
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));