class Str {
    constructor(kata) {
        this.kata = kata;
    }

    static lower(lowcase){
        this.kata = lowcase.toLowerCase();
        return this.kata;
    }

    static upper(upcase){
        this.kata = upcase.toUpperCase();
        return this.kata;
    }

    static capitalize(captlz){
        this.kata = captlz.split(' ').map(el => {
            if (typeof el !== 'string') return ''
            return el.charAt(0).toUpperCase() + el.slice(1)
        });
        return this.kata.join(' ');
    }

    static reverse(rvrs){
        this.kata = [...rvrs].reverse();
        return this.kata.join('');
    }

    static contains(word,search){
        const b = word.split(" ");
    
        if(typeof(search) == 'string'){
            const c = search.split(" ");
            const d = b.map((el) => {
                if(el.includes(c[0])){
                    return true
                }
            })

            if(d.indexOf(true) !== -1){
            return this.kata = d[d.indexOf(true)]
            }
            else{
                return this.kata = false;
            }            
        };
        
        const cek = search.map((el) => {
            if(b.join(' ').includes(el)){
                return true;
            }
        });
        
        if(cek.indexOf(true) !== -1){
            return this.kata = cek[cek.indexOf(true)]
        }
        else{
            return this.kata = false;
        }
        
        
    }

    static random(length){
        let result = '';
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if(length == undefined){
            for (let i = 16; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return this.kata = result;
        }

        for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return this.kata = result;
    }

    static count(txt){
        return this.kata = txt.length;
    }

    static countWords(words){
        return this.kata = words.split(" ").length;
    }

    static trimWords(txt, numb, param){
        let result = [];
        const text = txt.split(" ");
        if(numb == undefined){
            return this.kata = txt;
        }
        else if(numb !== 0 && param == undefined){
            for (let i = numb; i > 0; --i) result.push(text[i -1]);
            return this.kata = result.reverse().join(" ") + '...';
        }
        else {
            for (let i = numb; i > 0; --i) result.push(text[i -1]);
            return this.kata = result.reverse().join(" ") + param;
        }
    }
}

const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

console.log(Str.lower('MAKAN'),
Str.upper('malam'),
Str.capitalize('saya ingin makan'),
Str.reverse('kasur'),
Str.contains('Saya ingin makan sate', 'makan'),
Str.contains('Saya ingin makan sate', 'rujak'),
Str.contains('Saya ingin makan sate', ['sate','rujak']),
Str.random(),
Str.random(6),
Str.random(32),
Str.count('lorem ipsum'),
Str.countWords('lorem impsum'),
Str.trimWords(txt, 3, '.....'),
);
