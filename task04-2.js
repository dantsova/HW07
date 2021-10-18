function highAndLow(str){
    let arr = str.split(' ');
    let min = parseInt(arr[0]), max = parseInt(arr[0]);
    for(let i=1; i<arr.length; ++i){
        max = parseInt(arr[i])>max ?
            parseInt(arr[i]) : max;
        min = parseInt(arr[i])<min ?
            parseInt(arr[i]) : min;
    }
    return [max, min].join(" ");
}


console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
