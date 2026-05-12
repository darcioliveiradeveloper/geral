function Divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero";
    }
    return num1 / num2;
}

module.exports = Divisao;

module.exports = (a, b) => b === 0 ? "Erro (Divisão por zero)" : a / b;

