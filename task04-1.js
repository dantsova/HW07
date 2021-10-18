function getMiddle(str){
    return (str.length%2) == 0 ?
        str.substr((str.length/2)-1, 2) : str.substr(str.length/2, 1);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));