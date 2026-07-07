function cadastrarBike(e){

    e.preventDefault();

    const dados = {
        modelo: document.getElementById("modelo").value.trim(),
        marca: document.getElementById("marca").value.trim(),
        tipo: document.getElementById("tipo").value,
        ano: Number(document.getElementById("ano").value),
        preco: Number(document.getElementById("preco").value),
        status: document.getElementById("status").value
    };

    console.log(dados);
    if(editingId){

        atualizarBike(dados);

    }else{

        bikes.push({
            id: Date.now().toString(),
            ...dados
        });

    }

    salvar();

    limparForm();

    render();
}