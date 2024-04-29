const number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let tryNumber = 3;
let Question = document.getElementById("Question");
let respons = document.getElementById('Respons');
let response;
let RestantTryes = document.getElementById('RestantTryes');
Question.innerText = 'Qual é o valor que você deseja chutar de 1 a 10?';

function Setresponse() {
    response = parseInt(respons.value);
    if (respons.value === "") {
        alert("Por favor, insira um número antes de enviar.");
        return
    }
    while (tryNumber > 0) {
        tryNumber--;
        if (response == number) {
            alert('Parabéns você acertou o número!');
            location.reload();
            break;
        }
        if (response < number) {
            Question.innerText = 'Esse número é muito baixo';
            break;
        } else if (response > number) {
            Question.innerText = 'Esse número é muito alto';
            break;
        }
    }
}
function UpdateTryes() {
    RestantTryes.textContent = tryNumber;
    if (tryNumber == 0 && response !== number) {
        alert(`O número era ${number}, não foi dessa vez, tente novamente`);
        location.reload();
    }
    console.log(tryNumber);
}
