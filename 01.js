const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    if(s === [...s].reverse().join('')){
        return `Palindrome`
    }
    else {
        return `Bukan Palindrome`
    };
}

console.log(
    `${palindrome('')},
    ${palindrome('Yo, banana boy!')}`
);