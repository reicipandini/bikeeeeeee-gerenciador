function render(){

    const busca = document.getElementById("busca").value.toLowerCase();

    const filtro = document.getElementById("filtro-status").value;

    const tabela = document.getElementById("tabela-corpo");

    tabela.innerHTML = "";

    const lista = bikes.filter(function(b){

        const nome = b.modelo.toLowerCase().includes(busca) ||
                     b.marca.toLowerCase().includes(busca);

        const status = filtro == "" || b.status == filtro;

        return nome && status;

    });

    document.getElementById("empty-msg").style.display =
        lista.length ? "none" : "block";

    lista.forEach(function(b){

        tabela.innerHTML += `
        <tr>

            <td>${escapeHtml(b.modelo)}</td>

            <td>${escapeHtml(b.marca)}</td>

            <td>${escapeHtml(b.tipo)}</td>

            <td>${b.ano}</td>

            <td>${formatarPreco(b.preco)}</td>

            <td>
                <span class="badge ${b.status}">
                    ${statusLabel(b.status)}
                </span>
            </td>

            <td>

                <button data-action="edit" data-id="${b.id}">Editar</button>

                <button data-action="del" data-id="${b.id}">
                    Excluir
                </button>

            </td>

        </tr>`;
    });

    atualizarEstatisticas();

}