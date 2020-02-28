const even = (numb) => {
    return numb.filter(el => {
        return el % 2 == 0;
    });
}

const odd = (numb) => {
   return numb.filter(el => {
        return el % 2 != 0;
    });
}

const mtply5 = (numb) => {
    return numb.filter(el => {
        return el % 5 == 0;
    })
}

const findPrime = (el) => {
    for(let i = 2; i < el; i++){
        if(el % i == 0 ) {
            return false;
        };
    }
    return el;
};

const prima = (numb) => {
    const hasil = numb.map(findPrime).filter(el => {
        return el !== false && el != 1;
    })

    return hasil
};

const prima100 = (numb) => {
    const hasil100 = numb.filter((el) => {
        return el <= 100
    })
    return hasil100.map(findPrime).filter(el => {
        return el !== false && el != 1;
    })
}


const numb = [];
for (let i = 1; i <= 1000; i++){
    numb.push(i);
}

console.log(numb);
console.log(even(numb));
console.log(odd(numb));
console.log(mtply5(numb));
console.log(prima(numb));
console.log(prima100(numb));




