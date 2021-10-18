function jadenCasedFormatter(str){
    let arr = str.split(" ");
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
    }
    return newArr.join(" ");
}

console.log(jadenCasedFormatter("How can mirrors be real if our eyes aren't real"));