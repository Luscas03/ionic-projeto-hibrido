import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-perfil-atualizar',
  templateUrl: './perfil-atualizar.page.html',
  styleUrls: ['./perfil-atualizar.page.scss'],
})
export class PerfilAtualizarPage implements OnInit {
  idcliente : string = "";
  formGroup: FormGroup;
  cliente : Cliente = new Cliente();

  constructor(private formB: FormBuilder,
  private template: TemplateService,
  private auth: AngularFireAuth,
  private navCtrl: NavController,
  private clienteServ : ClienteService
  ) {
    this.iniciarForm();
    this.auth.authState.subscribe(response=>{
      this.idcliente = response.uid;
      this.clienteServ.obterPerfil(this.idcliente).subscribe(response=>{
        this.cliente = response;
        this.iniciarForm();
      })
    })
  }

  ngOnInit() {
  }

  atualizar(){
    this.clienteServ.atualizarPerfil(this.idcliente, this.formGroup.value).subscribe(response=>{
      console.log(response);
      this.navCtrl.navigateForward(['/perfil']);
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

}
