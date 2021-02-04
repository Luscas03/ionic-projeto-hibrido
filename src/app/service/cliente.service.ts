import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { Cliente } from "../model/cliente";




@Injectable()
export class ClienteService{

constructor(private firestore : AngularFirestore){}

    cadastrar(cliente : any) : Observable<any>{

    return from(new Observable(observe=>{
    
        //código 
            this.firestore.collection('cliente').add(cliente).then(respose=>{

                observe.next("Cadastrado com Sucesso!");

            }).catch(err=>{
                console.log(err);
                
                observe.next("Erro ao Cadastrar!");
            })



        //fim código
        
    }))
    
    }
    listaDeClientes(): Observable<any>{
        return from (new Observable(observe=>{

         

           this.firestore.collection('cliente').snapshotChanges().subscribe(response=>{
            let lista : Cliente[] = [];
              response.map(obj=>{ //converter o response em objetos cliente
                //dados do cleinte
            let data  =  obj.payload.doc.data();
            let id =  obj.payload.doc.id;
            //dados do cliente no objeto Cliente
                let cliente : Cliente = new Cliente();
                cliente.setData(id,data);
                lista.push(cliente); // adicionando o cliente na lista 
              })
              observe.next(lista);
            })
        }))



    }


}