function statusLabel(status){

    const lista = {

        "disponivel":"Disponível",

        "em-uso":"Em uso",

        "manutencao":"Manutenção"

    };

    return lista[status];
}    

function formatarPreco(v) {
    v = Number(v) || 0;

    return v.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

function escapeHtml(texto){

    const div = document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;

}

function limparForm(){

    document.getElementById("bike-form").reset();

    editingId = null;

    document.getElementById("form-title").textContent = "Nova bike";

    document.getElementById("submit-btn").textContent = "Adicionar bike";

    document.getElementById("cancel-edit").style.display = "none";

}

function atualizarEstatisticas(){

    document.getElementById("stat-total").textContent = bikes.length;

    document.getElementById("stat-disponiveis").textContent =
        bikes.filter(b => b.status=="disponivel").length;

    const total = bikes.reduce((s,b)=>s+Number(b.preco),0);

    document.getElementById("stat-valor").textContent =
        formatarPreco(total);

}