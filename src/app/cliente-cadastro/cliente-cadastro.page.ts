import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {
  formGroup: FormGroup;



  constructor(
    private formB: FormBuilder,
    private navCtrl: NavController,
    private template: TemplateService,
    private clientServ: ClienteService
  ) {

    this.iniciarForm();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.template.loading.then(load => {



      load.present();
      this.clientServ.cadastrar(this.formGroup.value).subscribe(response => {
        load.dismiss();
      this.template.myAlert(response);

      })

    })

  }
  cancelar() {
    this.navCtrl.navigateBack(['/home']);

  }
  iniciarForm() {
    this.formGroup = this.formB.group({

      cpf: [],
      cidade: [],
      endereco: [],
      numero: [],
      email: [],
      estado: [],
      nome: [],
      telefone: []
    })
  }

}


