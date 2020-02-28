function csvJSobj(csv) {

    const lines=csv.split("\n");
  
    const result = [];
  
    const headers=lines[0].split(",").map((el) => {
        return el.replace(/\s/g, '')
    });
    console.log(headers)
  
    for(let i=1;i<lines.length;i++){
  
        const obj = {};
        const currentline=lines[i].split(",").map((el) => {
            return el.replace(/\s/g, '')
        });
  
        for(let j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
  
    }


    const ambilAngka = result.map((el) => {
        const angka = el.PRICE;
        let rupiah = '';		
        let angkarev = angka.toString().split('').reverse().join('');
        
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        const numb = rupiah.split('',rupiah.length-1).reverse().join('');
        
        return `Rp.${numb}`;
    });

    result.forEach((el,i) => {
        el.PRICE = ambilAngka[i]
    });

    const sortByProperty = (prop) => {
        return (a,b) => {
            if(a[prop] > b[prop])
            return 1;
            else if(a[prop] < b[prop])
            return -1;
            return 0;
        }
    }

    return result;
}

const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

console.log(csvJSobj(csv));