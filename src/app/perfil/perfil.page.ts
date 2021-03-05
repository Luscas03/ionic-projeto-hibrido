import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  uid : string = null;
  cliente : Cliente = new Cliente();

  constructor(
    private clienteServ : ClienteService,
    private auth: AngularFireAuth,
    private navCtrl: NavController) {

      this.auth.authState.subscribe(response=>{
        this.uid = response.uid;
        console.log(response.uid);

        this.clienteServ.obterPerfil(this.uid).subscribe(response=>{
          console.log(response);
          if(response==null){
            //perfil não existe
            this.navCtrl.navigateRoot('\perfil-atualizar'); // Página formulário para criar o perfil, trocar pela home
          }else{
            
            // perfil existe
            this.clienteServ.obterPerfil(this.uid).subscribe(data=>{
              this.cliente = data;
            })
          }

        },err=>{
          console.log("Erro");
        })
      })
  }

  ngOnInit() {
  }



}