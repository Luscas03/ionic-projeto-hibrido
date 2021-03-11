import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  uid : string = null;
  cliente : Cliente = new Cliente();
  imagem : any; // imagem do perfil enviado/baixado/url

  constructor(
    private clienteServ : ClienteService,
    private template: TemplateService,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private fireStorage : AngularFireStorage// biblioteca para o storage firebase
    ) {

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
              this.downloadImage(); // Realiza o donwload da imagem no início
            })
          }

        },err=>{
          console.log("Erro");
        })
      })
  }

  ngOnInit() {
  }

atualizar(){
  this.navCtrl.navigateRoot('/perfil-atualizar');
}


downloadImage(){
  // faz o donwload da imagem na pasta perfil
  // nome da imagem é o id do usuario + jpg
  this.template.loading.then(load => { // iniciar o carregamento
    load.present(); // forçar inicio carremento
  this.fireStorage.storage.ref().child(`perfil/${this.uid}.jpg`).getDownloadURL().then(url=>{
    load.dismiss();
    this.imagem = url;
  },err =>{
    this.imagem = "https://www.cob.org.br/public/painel/img/perfil.jpg"; // imagem não existe
  })
})
}

}