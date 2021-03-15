import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-perfil-atualizar',
  templateUrl: './perfil-atualizar.page.html',
  styleUrls: ['./perfil-atualizar.page.scss'],
})
export class PerfilAtualizarPage implements OnInit {
  idcliente: string = "";
  formGroup: FormGroup;
  cliente: Cliente = new Cliente();
  imagem: any; // armazenado imagem / url

  constructor(private formB: FormBuilder,
    private template: TemplateService,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private clienteServ: ClienteService,
    private fireStorage: AngularFireStorage
  ) {
    this.iniciarForm();

    this.auth.authState.subscribe(response => {
      this.idcliente = response.uid;
      this.clienteServ.obterPerfil(this.idcliente).subscribe(response => {
        this.cliente = response;
        this.iniciarForm();
        this.downloadImage();
      })
    })
  }

  ngOnInit() {
  }

  atualizar() {
    this.template.loading.then(load => { 
      load.present();
      this.clienteServ.atualizarPerfil(this.idcliente, this.formGroup.value).subscribe(response => {
        load.dismiss();
        this.navCtrl.navigateRoot(['/perfil']);
      })
  })
  }

  iniciarForm() {
    this.formGroup = this.formB.group({
      nome: [this.cliente.nome],
      email: [this.cliente.email],
      endereco: [this.cliente.endereco],
      telefone: [this.cliente.telefone]
    })
  }

  downloadImage() {
    // template load
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento
      this.fireStorage.storage.ref().child(`perfil/${this.idcliente}.jpg`).getDownloadURL().then(url => {
        this.imagem = url;
      }).catch(err => {
        load.dismiss();
        this.template.myAlert("Erro");
      })
    })
  }

  uploadImage(event) {
    this.template.loading.then(load => { // iniciar o carregamento
      this.imagem = event.srcElement.files[0]; // imagem do campo input type file
      load.present(); // forçar inicio carremento
      this.fireStorage.storage.ref().child(`perfil/${this.idcliente}.jpg`).put(this.imagem).then(url => {
        this.downloadImage();
      }).catch(err => {
        load.dismiss();
        this.template.myAlert("Erro");
      })

    })
  }


}
