export class Produto {

    id : string;
    nomeproduto : string;
    tipo : string;
    preco : string;
    descricao : string;
    quantidade : string;


setData(id : any, data : any){
    this.id = id;
    this.nomeproduto = data.nomeproduto;
    this.tipo = data.tipo;
    this.preco = data.preco;
    this. descricao = data.descricao;
    this.quantidade = data.quantidade;
}




}