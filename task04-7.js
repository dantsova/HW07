function sum(x){
    if(x<0){
        return 0;
    }

    let sum = 0;
    for(let i = x-1; i>0; i--){
        if(i%5 == 0 || i%3 ==0){
            sum+=i;
        }
    }
    return sum;
}


console.log(sum(10));