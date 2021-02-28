export class Prato{
    id : string;
    nomeprato : string;
    calorias : string;
    grupo : string;
  
  
    setData(id : any, data: any){
        this.id = id;
        this.nomeprato = data.nomeprato;
        this.calorias = data.calorias;
        this.grupo = data.grupo;
      
  
    }
}