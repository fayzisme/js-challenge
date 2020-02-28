function leapYear(...year)
{
  var hasil = '';
  for(let i = year[0]; i <= year[year.length - 1]; i++){
    if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)){
        const cek = `${i} adalah kabisat. `;
        hasil += cek;
    };
  };
  return hasil
};

console.log(leapYear(2020,2032));

