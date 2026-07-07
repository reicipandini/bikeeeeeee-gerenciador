function acaoTabela(e){

    const botao = e.target.closest("button");

    if(!botao) return;

    const id = botao.dataset.id;

    if(botao.dataset.action == "edit"){

        editarBike(id);

    }

    if(botao.dataset.action == "del"){

        excluirBike(id);

    }

}