import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { Cliente } from "../model/cliente";
import { Consulta } from "../model/consulta";

@Injectable()
export class ClienteService {
    constructor(private firestore: AngularFirestore) { }


    obterPerfil(id: any): Observable<any> {
        return from(new Observable(observe => { // Converte para Observable

            this.firestore.collection('perfil').doc(id).snapshotChanges().subscribe(response => {

                try {
                    let data = response.payload.data();
                    let id = response.payload.id;
                    let cliente: Cliente = new Cliente();
                    cliente.setData(id, data);
                    observe.next(cliente);
                } catch (err) {
                    observe.next(null);
                }

            }, err => {
                observe.next(null);
            })


        }))
    }

    atualizarPerfil(id, data): Observable<any> {

        return from(new Observable(observe => {

            this.firestore.collection('perfil').doc(id).set(data).then(response => {
                observe.next("Atualizado com sucesso");
            }, err => {
                observe.next(null);
            })

        }))
    }

}