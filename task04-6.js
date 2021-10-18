function explode(str){
    return str.replace(/[0-9]/g, function(d){ return d.repeat(d)});
}

console.log(explode("312"));
console.log(explode("102269"));