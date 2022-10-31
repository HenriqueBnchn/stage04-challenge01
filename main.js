

let num1 = prompt('Digite o primeiro número')
let num2 = prompt('Digite o segundo número')

num1 = Number(num1)
num2 = Number(num2)



let sum = (num1 + num2)
let sub = (num1 - num2)
let mult = (num1 * num2)
let div = (num1 / num2)
let rest = (num1 % num2)


if(num1 === num2){
  alert("Os números escolhidos são IGUAIS!")
}else{
  alert("Os números escolhidos são DIFERENTES!")  
}

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mult}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${rest}`);


let sumPair = sum % 2

if((sumPair) == 0){
  alert(`A soma desses valores resulta em um número PAR! (${sumPair})`)
}else{
  alert(`A soma desses valores resulta em um número ÍMPAR! (${sumPair})`)  
}

