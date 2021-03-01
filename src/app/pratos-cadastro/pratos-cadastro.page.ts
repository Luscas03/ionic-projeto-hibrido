import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';

import { TemplateService } from '../service/template.service';
import { PratoService } from '../service/prato.service';

@Component({
  selector: 'app-pratos-cadastro',
  templateUrl: './pratos-cadastro.page.html',
  styleUrls: ['./pratos-cadastro.page.scss'],
})
export class PratosCadastroPage implements OnInit {
  formGroup: FormGroup;
  constructor(private formB: FormBuilder,
    private navCtrl: NavController, 
    private template: TemplateService,
    private pratoServ: PratoService) {
     this.iniciarForm();
  }
  
  
  ngOnInit() {
  }

  cadastrar() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.pratoServ.cadastrar(this.formGroup.value).subscribe(response => {
        load.dismiss();
        this.template.myAlert(response);
      })

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      nomeprato: [],
      calorias: [],
      grupo: []

    })
  }

  

}
 