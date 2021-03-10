import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PratoService } from '../service/prato.service';
import { Prato } from '../model/prato';


@Component({
  selector: 'app-prato-visualizar',
  templateUrl: './prato-visualizar.page.html',
  styleUrls: ['./prato-visualizar.page.scss'],
})
export class PratoVisualizarPage implements OnInit {
formGroup : FormGroup;
prato : Prato = new Prato();
  constructor(private navCtrl : NavController,
    private formB : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private pratoServ : PratoService
    ) {


      this.iniciarForm();
     }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.pratoServ.buscarPorId(id).subscribe(response=>{
        this.prato = response;
        console.log(this.prato);
        this.iniciarForm();
      })

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.prato.id],
      nomeprato: [this.prato.nomeprato],
      calorias: [this.prato. calorias],
      grupo: [this.prato.grupo], 
      
    })
  }
  remover(){
    this.navCtrl.navigateForward(['/prato-remove',this.prato.id]);
  }

} 
