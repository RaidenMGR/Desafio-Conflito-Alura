//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!"

let dia = prompt('qual é o dia da semana');

if (dia == 'sabado' || dia == 'domingo') {

   alert('Bom fim de semana!');

} else {
   if (dia == 'segunda' || dia == 'terca' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta') {
      alert('Boa Semana');
   }

}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('escolha um numero');
if (numero < 0) {
   alert('o numero escolhido é negativo');
} else {
   alert('o numero escolhido é positivo');
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 0;
let resposta1 = prompt('a girafa é de que cor?');
let resposta2 = prompt('o tigre é de que cor?');
if (resposta1 == amarela) {
   pontuacao + 50;
} else {
   pontuacao + 0;
}
if (resposta2 == laranja) {
   pontuacao + 50;
} else {
   pontuacao + 0;
}
if (pontuacao = 100) {
   alert('Parabéns, você venceu!')
} else {
   alert('Tente novamente para ganhar.')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 300;
alert('olhar saldo da conta');
alert(`saldo disponivel é ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeusuario = prompt('digite seu nome');
alert(`Boas vindas ${nomeusuario}`);