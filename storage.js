const STORAGE_KEY = "bikes-manager-data";

let bikes = [];

let editingId = null;

function carregar() {
    const dados = localStorage.getItem(STORAGE_KEY);

    bikes = dados ? JSON.parse(dados) : [];
}

function salvar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bikes));
}