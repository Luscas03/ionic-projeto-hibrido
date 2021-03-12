import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  idcliente : string = "";


  constructor(private formB: FormBuilder,
    private navCtrl: NavController,
    private template: TemplateService,
    private consultaServ: ConsultaService,
    private auth : AngularFireAuth) {
    this.iniciarForm();

    this.auth.authState.subscribe(response=>{ // dados usuário logado
      this.idcliente = response.uid; // id do usuário logado
      this.iniciarForm(); // atualizando formulário com o id do cliente
    })
  }
  
  ngOnInit() {
  }

  cadastrar() {
 
    
    let d = new Date(this.formGroup.controls['date'].value);
   
    

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
      idcliente: [this.idcliente]
    })
  }

  

}