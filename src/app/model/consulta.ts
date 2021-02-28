
 export class Consulta{
  id : string;
  tipo : string;
  especialidade : string;
  date: string;
  hora : string;

  setData(id : any, data: any){
      this.id = id;
      this.tipo = data.tipo;
      this.especialidade = data.especialidade;
      this.date = data.date;
      this.hora = data.hora;

  }

}