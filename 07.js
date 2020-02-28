const txt = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

const countWord  = (text) => {
    const count = txt.toLowerCase().match(/(aku|ingin|dapat)/g);
    const aku = count.join('').match(/aku/g).length;
    const ingin = count.join('').match(/ingin/g).length;
    const dapat = count.join('').match(/dapat/g).length;

    return `
    aku = ${aku},
    ingin = ${ingin},
    dapat = ${dapat}`

}

console.log(countWord(txt));