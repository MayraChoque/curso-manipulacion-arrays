// Map Reloaded

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
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

console.log("Original: ", orders);
const rta = orders.map(item => item.total);
console.log("New: ", rta);

//Modifica el objeto principal 
/* const rta2 = orders.map(item => {
      item.tax = .19;
      return item;
});

console.log("Original: ", orders);
console.log("New: ", rta2); */


// No modifica el objeto principal 
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log("Original: ", orders);
console.log("New: ", rta3);

//Desafio

function solution(array) {
    var resp = array.map(item => { 
		return {
            ...item,
			taxes: Math.trunc(item.price * .19)
		}
	});
 return resp;
};


solution ([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
]);