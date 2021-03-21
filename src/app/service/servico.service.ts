import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Servico } from '../model/servico';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private firestore : AngularFirestore) { }

  cadastrar(servico: any) : Observable<any>{ // Função cadastro
    return from(new Observable(observe=>{ // Converte para Observable
        //codigo -> Inicia o cadastro
        this.firestore.collection('servico').add(servico).then(response=>{
            observe.next("Serviço cadastrado com sucesso");
        }).catch(err=>{
            console.log(err);
            observe.next("Erro ao cadastrar");
        })
        // fim codigo
    }))
}
listaDeServicos(): Observable<any>{
    return from (new Observable(observe=>{

     

       this.firestore.collection('servico').snapshotChanges().subscribe(response=>{
        let listas : Servico[] = [];
          response.map(obj=>{ //converter o response em objetos cliente
            //dados do cleinte
        let data  =  obj.payload.doc.data();
        let id =  obj.payload.doc.id;
        //dados do cliente no objeto Cliente
            let servico : Servico = new Servico();
            servico.setData(id,data);
            listas.push(servico); // adicionando o cliente na lista 
          })
          observe.next(listas);
        })
    }))



}

buscarPorId(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('servico').doc(id).snapshotChanges().subscribe(response=>{
            
            let data = response.payload.data();
            let id = response.payload.id;

            // dados do cliente no objeto CLiente
            let servico : Servico = new Servico();
            servico.setData(id,data);

            observe.next(servico);
        },err=>{
            observe.next(null);
        })

    }))
}


atualizar(id : any, dados : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable
   
        this.firestore.collection('servico').doc(id).set(dados).then(response=>{
            observe.next("Servico atualizado com sucesso");
        },err=>{
            observe.next("Erro ao atualizar");
        })
                
    }))

}
    excluir(id : any): Observable<any>{
    return from(new Observable(observe=>{ // Converte para Observable

        this.firestore.collection('servico').doc(id).delete().then(response=>{
            observe.next("Servico excluído com sucesso");
        },err=>{
            observe.next("Erro ao excluir");
        })
    })) 
}



  
  
}
