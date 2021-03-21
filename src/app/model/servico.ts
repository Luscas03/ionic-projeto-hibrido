export class Servico {
    id: string;
    nome : string; 

    setData(id : any, data: any){
        this.id = id;
        this.nome = data.nome;
      

  
    }
}