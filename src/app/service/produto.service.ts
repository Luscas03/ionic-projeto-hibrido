import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable } from 'rxjs';
import { Produto } from '../model/produto';


@Injectable()
export class ProdutoService{
    
    
    
    constructor(private firestore : AngularFirestore){

    }
cadastrar(produto : any) : Observable<any>{

return from(new Observable(observe=>{

//Código 
this.firestore.collection('produto').add(produto).then(response=>{
   observe.next("Cadastrado com Sucesso!") 
}).catch(err=>{

    observe.next("Erro ao Cadastrar!") 

})
//fim do Código

}))


}
listaDeProdutos() : Observable<any>{
    return from(new Observable(observe=>{
        this.firestore.collection('produto').snapshotChanges().subscribe(response=>{

            let lista : Produto[] = [];
            response.map(obj=>{
                //converter o response em objetos produto
                let data = obj.payload.doc.data();
                let id = obj.payload.doc.id;
                let produto : Produto = new Produto();
                produto.setData(id,data);
                lista.push(produto);
            
            })
            observe.next(lista);
        })
}))
}
buscarPorId(id : any): Observable<any>{
    return from(new Observable(observe=>{

        this.firestore.collection('produto').doc(id).snapshotChanges().subscribe(response=>{
 //converter o response em objetos produto
 let data = response.payload.data();
 let id = response.payload.id;
 let produto : Produto = new Produto();
 produto.setData(id,data);


 observe.next(produto);

        },err=>{
observe.next(null);

        })

    }))
}
atualizar(id : any, dados : any): Observable<any>{
    return from(new Observable(observe=>{
    
        this.firestore.collection('produto').doc(id).set(dados).then(response=>{

            observe.next("Atualizado com Sucesso!");

        }, err=>{


            observe.next("Erro ao Atualizar!");

        })

    }))

}

excluir(id : any): Observable<any>{
    return from(new Observable(observe=>{
        this.firestore.collection('produto').doc(id).delete().then(response=>{

            observe.next("Excluído com Sucesso!");

        }, err=>{


            observe.next("Erro ao Excluir!");

        })
    
    }))    
}


}