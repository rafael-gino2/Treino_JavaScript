 // Array que guarda as tarefas
    let tarefas = [];

    // Seletores
    const input = document.getElementById("inputTarefa");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    // Função principal de renderização
    function renderizarTarefas() {
        // Limpa a lista antes de renderizar
        lista.innerHTML = "";

        tarefas.forEach((tarefa, index) => {
            const card = document.createElement("div");
            card.classList.add("card-tarefa");

            const texto = document.createElement("span");
            texto.textContent = tarefa;

            const btnRemover = document.createElement("button");
            btnRemover.textContent = "🗑";

            btnRemover.addEventListener("click", () => {
                tarefas.splice(index, 1); // remove do array
                renderizarTarefas(); // atualiza tela
            });

            card.appendChild(texto);
            card.appendChild(btnRemover);
            lista.appendChild(card);
        });
    }

    // Adicionar tarefa
    btnAdicionar.addEventListener("click", () => {
        const valor = input.value.trim();

        if (valor !== "") {
            tarefas.push(valor); // adiciona no array
            input.value = "";
            renderizarTarefas(); // atualiza tela
        }
    });

    // Renderiza ao carregar a página
    renderizarTarefas();