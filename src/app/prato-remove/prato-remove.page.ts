import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Prato } from '../model/prato';
import { PratoService } from '../service/prato.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-prato-remove',
  templateUrl: './prato-remove.page.html',
  styleUrls: ['./prato-remove.page.scss'],
})
export class PratoRemovePage implements OnInit {
prato : Prato = new Prato();
  constructor(
    private pratoServ : PratoService,
    private activatedRoute : ActivatedRoute,
    private template : TemplateService,
    private navCtrl : NavController

  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl => {
      let id = idUrl.get('id');
      this.pratoServ.buscarPorId(id).subscribe(response => {
        this.prato = response;
        console.log(this.prato)
      })
    })

  }
  excluir() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.pratoServ.excluir(this.prato.id).subscribe(response => {
        load.dismiss();
        this.template.myAlert('Excluído com sucesso');
        this.navCtrl.navigateRoot('/home');
      })

    })
  }
  cancelar(){
    this.navCtrl.navigateRoot('/home');
  
}
}