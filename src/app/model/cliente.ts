export class Cliente {
    
    
    id : string;
    cpf : string;
    cidade : string;
    endereco : string;
    email : string;
    estado : string;
    nome : string;
    telefone : string;
    numero : string;
 
setData(id : any, data: any){
    
  this.id = id;
  this.cpf = data.cpf;
  this.cidade = data.cidade;
  this.endereco = data.endereco;
  this.email = data.email;
  this.estado = data.estado;
  this.nome = data.nome;
  this.telefone = data.telefone;
  this.numero = data.numero;
}




}