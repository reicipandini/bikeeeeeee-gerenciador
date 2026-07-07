carregar();

render();

document.getElementById("bike-form").addEventListener("submit", cadastrarBike);

document.getElementById("cancel-edit").addEventListener("click", limparForm);

document.getElementById("busca").addEventListener("input", render);

document.getElementById("filtro-status").addEventListener("change", render);

document.getElementById("tabela-corpo").addEventListener("click", acaoTabela);

function logout(){

    localStorage.removeItem("logado");

    window.location.href="login.html";

}