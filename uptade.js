function editarBike(id){

    const bike = bikes.find(function(b){

        return b.id == id;

    });

    if(!bike) return;

    editingId = id;

    document.getElementById("modelo").value = bike.modelo;

    document.getElementById("marca").value = bike.marca;

    document.getElementById("tipo").value = bike.tipo;

    document.getElementById("ano").value = bike.ano;

    document.getElementById("preco").value = bike.preco;

    document.getElementById("status").value = bike.status;

    document.getElementById("form-title").textContent = "Editar bike";

    document.getElementById("submit-btn").textContent = "Salvar alterações";

    document.getElementById("cancel-edit").style.display = "block";

}

function atualizarBike(dados){

    const indice = bikes.findIndex(function(b){

        return b.id == editingId;

    });

    if(indice >= 0){

        bikes[indice] = {

            ...bikes[indice],

            ...dados

        };

    }

}