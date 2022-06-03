const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog');
console.log('for', includeInArray);
console.log('includes', rta);

//Desafio
function solution(words, query) {
	const resp = words.filter(item => {
		return item.includes(query);
	});
	return resp;
}; 

console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));
console.log(solution(["ana", "santi", "nico", "anastasia"], "xyz"));