function parImpar() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText = "Digite um número válido";
        return;
    }

    if (numero % 2 === 0) {
        resultado.innerText = `${numero} é PAR`;
    } else {
        resultado.innerText = `${numero} é ÍMPAR`;
    }
}
