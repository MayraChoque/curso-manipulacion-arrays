const letters = ['a', 'b', 'c'];

//const newArray = [];

//for (let index = 0; index < letters.length; index++) {
//    const element = letters[index];
//    newArray.push(element + '++');
//}

// con .map, obtenemos el mismo resultado que el anterior

const newArray = letters.map(item => item + '++');


console.log('Original: ' + letters);
console.log('New: ' + newArray);


// multiplicar cada elemento x 2
function solution(array) {
	const newArray = array.map(item => (item * 2));
	return newArray;
}; 

console.log(solution([2, 4, 5, 6]));

