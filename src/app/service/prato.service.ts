import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from "rxjs";
import { Prato} from "../model/prato";
@Injectable({
  providedIn: 'root'
})
export class PratoService {

  constructor(private firestore : AngularFirestore) { }
  
  cadastrar(prato: any) : Observable<any>{ // Função cadastro
    return from(new Observable(observe=>{ // Converte para Observable
        //codigo -> Inicia o cadastro
        this.firestore.collection('prato').add(prato).then(response=>{
            observe.next("Cadastrado com sucesso");
        }).catch(err=>{
            console.log(err);
            observe.next("Erro ao cadastrar");
        })
        // fim codigo
    }))
}

listaDeConsultas(): Observable<any>{

    return from(new Observable(observe=>{ // Converte para Observable
        
        this.firestore.collection('prato').snapshotChanges().subscribe(response=>{ 
            
            let lista : Prato[] = []; // iniciar uma lista vazia  

             // converter o response em objetos consulta
             response.map(obj=>{ 
                // dados do consulta
                let data = obj.payload.doc.data();
                let id = obj.payload.doc.id;

                // dados do consulta no objeto CLiente
                let prato : Prato = new Prato();
                prato.setData(id,data);
                lista.push(prato); // adicionando o consulta na lista
            })

            observe.next(lista);
        })


    }))  
}

buscarPorId(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('Prato').doc(id).snapshotChanges().subscribe(response=>{
            
            let data = response.payload.data();
            let id = response.payload.id;

            // dados do cliente no objeto CLiente
            let prato : Prato = new Prato();
            prato.setData(id,data);

            observe.next(prato);
        },err=>{
            observe.next(null);
        })

    }))
}


atualizar(id : any, dados : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable
   
        this.firestore.collection('prato').doc(id).set(dados).then(response=>{
            observe.next("Atualizado com sucesso");
        },err=>{
            observe.next("Erro ao atualizar");
        })
                
    }))

}
    excluir(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('prato').doc(id).delete().then(response=>{
            observe.next("Excluído com sucesso");
        },err=>{
            observe.next("Erro ao atualizar");
        })
    })) 
}
}

