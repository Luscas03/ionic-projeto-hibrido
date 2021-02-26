import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.page.html',
  styleUrls: ['./cliente-lista.page.scss'],
})
export class ClienteListaPage implements OnInit {
lista : Cliente[] = [];


  constructor(private clienteServ : ClienteService,
    private navCtrl : NavController
    ) { 



  }

  ngOnInit() {
  this.clienteServ.listaDeClientes().subscribe(response=> {
    this.lista = response;
  })
  
  
  }
visualizar(cliente){

  this.navCtrl.navigateForward(['cliente-visualizar', cliente.id]);

}
}
