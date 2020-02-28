const combineArrays = (...args) => {
    const maping = args.map(el => {
        return el.join(' ');
    });

    return maping.join(' ');
}

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

console.log(combineArrays(first,second,third,));