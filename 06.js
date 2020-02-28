const txt = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const bintang = '*';
const banned = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
const filter = new RegExp(`\\b(${banned.join('|')})\\b`, 'gi');

const censor = (text) => {
  return text.split(/\b/).map(
    (word) => {
        return banned.includes(word.toLowerCase()) ? bintang.repeat(word.length) : word
}).join('');
}
  
  console.log(censor(txt))