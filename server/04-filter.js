const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

// Con filter, se consigue el mismo resultado con menos lineas de código

const rta = words.filter(item => item.length >= 6);

console.log('newArray', rta);
console.log('original', words);



//
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Nico",
      total: 240,
      delivered: true,
    },
  ];

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta', rta2);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));

// Desafio

function solution(array) {
	return array.filter(i => i.length >= 4)
}; 


console.log(solution(['amor', 'sol', 'piedra', 'día']));