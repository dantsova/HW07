function deleteVowels(str){
    const vowelsRegular = /[aAeEoOiIuU]/g;

    return str.replace(vowelsRegular, "");
}

console.log(deleteVowels("This website is for losers LOL!"));