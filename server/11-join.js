const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if(index === (elements.length -1)){
        rtaFinal = rtaFinal + element;
    }else{
        rtaFinal = rtaFinal + element + separator;
    }
}

const rta = elements.join('--');
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);


// Desafio
function solution(title) {
	const resp = title.split(' ').join('-').toLowerCase();
    return resp;
}; 

console.log(solution("La forma de correr Python"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de arrays"));