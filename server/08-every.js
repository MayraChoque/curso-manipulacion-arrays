const numbers = [1,30,39,29,10,13];


let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2)


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  
  const allAreYounger = team.every(item => item.age < 15);
  console.log(allAreYounger);


  //Desafio
function solution(numbers) {
	const resp = numbers.every(item => item % 2 === 0);
	return resp;
}; 

console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));