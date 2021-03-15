export class Cliente { // Perfil
    
    id : string;
    endereco : string;
    email : string;
    nome : string;
    telefone : string;

 
setData(id : any, data: any){
    
  this.id = id;


  this.endereco = data.endereco;
  this.email = data.email;
  this.nome = data.nome;
  this.telefone = data.telefone;
}




}