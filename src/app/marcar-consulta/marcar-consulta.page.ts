import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ConsultaService } from '../service/consulta.service';
import { TemplateService } from '../service/template.service';


@Component({
  selector: 'app-marcar-consulta',
  templateUrl: './marcar-consulta.page.html',
  styleUrls: ['./marcar-consulta.page.scss'],
})
export class MarcarConsultaPage implements OnInit {
  formGroup: FormGroup;


  constructor(private formB: FormBuilder,
    private navCtrl: NavController,
    private template: TemplateService,
    private consultaServ: ConsultaService) {
    this.iniciarForm();
  }
  
  ngOnInit() {
  }

  cadastro() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.consultaServ.cadastrar(this.formGroup.value).subscribe(response => {
        load.dismiss();
        this.template.myAlert(response);
      })

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      tipo: [],
      especialidade: [],
      date: [],
      hora: []
    })
  }

}