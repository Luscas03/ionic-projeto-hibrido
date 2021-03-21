import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Dieta } from '../model/dieta';

@Injectable({
  providedIn: 'root'
})
export class DietasService {

  constructor(private firestore : AngularFirestore) { }

  
  cadastrar(dieta: any) : Observable<any>{ // Função cadastro
    return from(new Observable(observe=>{ // Converte para Observable
        //codigo -> Inicia o cadastro
        this.firestore.collection('dieta').add(dieta).then(response=>{
            observe.next("Dieta cadastrada com sucesso");
        }).catch(err=>{
            console.log(err);
            observe.next("Erro ao cadastrar");
        })
        // fim codigo
    }))
}
listaDeDietas(): Observable<any>{
    return from (new Observable(observe=>{

     

       this.firestore.collection('dieta').snapshotChanges().subscribe(response=>{
        let listad : Dieta[] = [];
          response.map(obj=>{ //converter o response em objetos cliente
            //dados do cleinte
        let data  =  obj.payload.doc.data();
        let id =  obj.payload.doc.id;
        //dados do cliente no objeto Cliente
            let dieta : Dieta = new Dieta();
            dieta.setData(id,data);
            listad.push(dieta); // adicionando o cliente na lista 
          })
          observe.next(listad);
        })
    }))



}

buscarPorId(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('dieta').doc(id).snapshotChanges().subscribe(response=>{
            
            let data = response.payload.data();
            let id = response.payload.id;

            // dados do cliente no objeto CLiente
            let dieta : Dieta = new Dieta();
            dieta.setData(id,data);

            observe.next(dieta);
        },err=>{
            observe.next(null);
        })

    }))
}


atualizar(id : any, dados : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable
   
        this.firestore.collection('dieta').doc(id).set(dados).then(response=>{
            observe.next("Dieta atualizada com sucesso");
        },err=>{
            observe.next("Erro ao atualizar");
        })
                
    }))

}
    excluir(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('dieta').doc(id).delete().then(response=>{
            observe.next("Dieta excluída com sucesso");
        },err=>{
            observe.next("Erro ao excluir");
        })
    })) 
}



  
  
}
