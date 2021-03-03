
 export class Consulta{
  id : string;
  tipo : string;
  especialidade : string;
  date: Date;
  idcliente : string;

  setData(id : any, data: any){
      this.id = id;
      this.tipo = data.tipo;
      this.especialidade = data.especialidade;
      this.date = new Date(data.date);
      this.idcliente = data.idcliente;
  }

}