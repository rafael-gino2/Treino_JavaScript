function coletarNumeros() {
    const numeros = [];

    for (let i = 1; i <= 3; i++) {
        let valor = Number(prompt(`Digite o ${i}º número:`));
        numeros.push(valor);
    }

    let maior = Math.max(...numeros);

    document.getElementById("resultado").innerText =
        `O maior número é: ${maior}`;
}
