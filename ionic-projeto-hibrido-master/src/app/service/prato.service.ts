import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from "rxjs";
import { Prato } from '../model/prato';
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
listaDePrato(): Observable<any>{
    return from (new Observable(observe=>{

     

       this.firestore.collection('prato').snapshotChanges().subscribe(response=>{
        let listap : Prato[] = [];
          response.map(obj=>{ //converter o response em objetos cliente
            //dados do cleinte
        let data  =  obj.payload.doc.data();
        let id =  obj.payload.doc.id;
        //dados do cliente no objeto Cliente
            let prato : Prato = new Prato();
            prato.setData(id,data);
            listap.push(prato); // adicionando o cliente na lista 
          })
          observe.next(listap);
        })
    }))



}

buscarPorId(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('prato').doc(id).snapshotChanges().subscribe(response=>{
            
            let data = response.payload.data();
            let id = response.payload.id;

            // dados do cliente no objeto CLiente
            let consulta : Prato = new Prato();
            consulta.setData(id,data);

            observe.next(consulta);
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

