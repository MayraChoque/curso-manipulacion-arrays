const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

// mismo resultado que for (anterior), en una sola línea
letters.forEach(item => console.log('forEach ' + item));