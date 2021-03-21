import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dieta } from '../model/dieta';
import { DietasService } from '../service/dietas.service';

@Component({
  selector: 'app-dieta-visualizar',
  templateUrl: './dieta-visualizar.page.html',
  styleUrls: ['./dieta-visualizar.page.scss'],
})
export class DietaVisualizarPage implements OnInit {
  formGroup: FormGroup;
  dieta : Dieta = new Dieta();
  constructor(private navCtrl : NavController,
    private formB: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private dietasServ : DietasService) { 

      this.iniciarForm();

    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.dietasServ.buscarPorId(id).subscribe(response=>{
        this.dieta = response;
    
        this.iniciarForm();
      })
 
    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.dieta.id],
      nome : [this.dieta.nome],
      descricao: [this.dieta.descricao],
     
      
    })
  }
  
  remover(){
    this.navCtrl.navigateForward(['/dieta-remove',this.dieta.id]);
  }
  editar(){
    this.navCtrl.navigateForward(['/dieta-editar',this.dieta.id]);
  }
}
