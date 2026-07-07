function excluirBike(id){

    if(confirm("Excluir esta bike?")){

        bikes = bikes.filter(function(b){

            return b.id != id;

        });

        salvar();

        render();

    }

}