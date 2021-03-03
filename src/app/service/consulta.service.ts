import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { Consulta} from "../model/consulta";

@Injectable()
export class ConsultaService{
    constructor(private firestore : AngularFirestore){}


    cadastrar(consulta: any) : Observable<any>{ // Função cadastro
        return from(new Observable(observe=>{ // Converte para Observable
            //codigo -> Inicia o cadastro
            this.firestore.collection('consulta').add(consulta).then(response=>{
                observe.next("Agendado com sucesso");
            }).catch(err=>{
                console.log(err);
                observe.next("Erro ao agendar");
            })
            // fim codigo
        }))
    }

    listaDeConsultas(): Observable<any>{

        return from(new Observable(observe=>{ // Converte para Observable
            
            this.firestore.collection('consulta').ref.limit(3).get().then(response=>{ 
                
                let lista : Consulta[] = []; // iniciar uma lista vazia  

                response.forEach(obj=>{
                    let data = obj.data();
                    let id = obj.id;
                    let consulta : Consulta = new Consulta();
                    consulta.setData(id,data);
                    lista.push(consulta); // adicionando o consulta na lista
                })
                observe.next(lista);
            })


        }))  
    }

    buscarPorId(id : any): Observable<any>{
        return from(new Observable(observe=>{ // Converte para Observable

            this.firestore.collection('consulta').doc(id).snapshotChanges().subscribe(response=>{
                
                let data = response.payload.data();
                let id = response.payload.id;

                // dados do cliente no objeto CLiente
                let consulta : Consulta = new Consulta();
                consulta.setData(id,data);

                observe.next(consulta);
            },err=>{
                observe.next(null);
            })

        }))
    }


    atualizar(id : any, dados : any): Observable<any>{
        return from(new Observable(observe=>{ // Converte para Observable
       
            this.firestore.collection('consulta').doc(id).set(dados).then(response=>{
                observe.next("Atualizado com sucesso");
            },err=>{
                observe.next("Erro ao atualizar");
            })
                    
        }))

    }
        excluir(id : any): Observable<any>{
        return from(new Observable(observe=>{ // Converte para Observable

            this.firestore.collection('consulta').doc(id).delete().then(response=>{
                observe.next("Excluído com sucesso");
            },err=>{
                observe.next("Erro ao atualizar");
            })
        })) 
    }
}