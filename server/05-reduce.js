const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);


//Desafio

function solution(numbers) {
    let resp = numbers.reduce((sum, number) => sum + number, 0)
    return resp;
}; 

console.log(solution([1, 1, 1]));
console.log(solution([2, 4, 8]));

// Reduce reload

