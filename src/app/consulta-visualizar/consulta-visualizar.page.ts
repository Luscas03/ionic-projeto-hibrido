import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-consulta-visualizar',
  templateUrl: './consulta-visualizar.page.html',
  styleUrls: ['./consulta-visualizar.page.scss'],
})
export class ConsultaVisualizarPage implements OnInit {
 
  formGroup: FormGroup;
  consulta : Consulta = new Consulta();

  constructor(private navCtrl : NavController,
    private formB: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private consultaServ : ConsultaService) {
      this.iniciarForm();
    }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.consultaServ.buscarPorId(id).subscribe(response=>{
        this.consulta = response;
        console.log(this.consulta);
        this.iniciarForm();
      })
 
    })
  }

  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.consulta.id],
      tipo: [this.consulta.tipo],
      especialidade: [this.consulta.especialidade],
      date: [this.consulta.date],
      
    })
  }

  remover(){
    this.navCtrl.navigateForward(['/consulta-remove',this.consulta.id]);
  }
}
