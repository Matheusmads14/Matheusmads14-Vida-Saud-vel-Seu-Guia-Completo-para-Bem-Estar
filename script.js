function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultadoElement = document.querySelector('.resultado');

    if (!isNaN(peso) && !isNaN(altura)) {
        var imc = peso / (altura * altura);
        

        var resultadoSobreImc 
        if (imc < 18.5) {
            resultadoSobreImc= 'Está abaixo do peso.';
        } else if (imc > 18.5 && imc < 25) {
            resultadoSobreImc = 'Está com peso normal.';
        } else if (imc > 25 && imc < 30) {
            resultadoSobreImc = 'Está com sobrepeso.';
        } else if (imc > 30 && imc < 35) {
            resultadoSobreImc = 'Está com Obesidade (grau I)';
        } else if (imc > 35 && imc < 40) {
            resultadoSobreImc = 'Está com Obesidade (grau II)';
        } else {
            resultadoSobreImc = 'Está com Obesidade (grau III)';
        }

        resultadoElement.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '. ' + resultadoSobreImc;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira valores válidos.';
    }
}

function showpeso() {
    calcularIMC();
    var resultadoElement = document.querySelector('.resultado');
    resultadoElement.style.display = 'block';
}
