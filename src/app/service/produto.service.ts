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


}