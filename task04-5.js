function isIzogramm(str){
    return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIzogramm("Dermatoglyphics"));
console.log(isIzogramm("aba"));
console.log(isIzogramm("moOse"));