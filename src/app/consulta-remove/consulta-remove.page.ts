import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-consulta-remove',
  templateUrl: './consulta-remove.page.html',
  styleUrls: ['./consulta-remove.page.scss'],
})
export class ConsultaRemovePage implements OnInit {
  consulta: Consulta = new Consulta();

  constructor(private consultaServ: ConsultaService,
    private activatedRoute: ActivatedRoute,
    private template: TemplateService,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl => {
      let id = idUrl.get('id');
      this.consultaServ.buscarPorId(id).subscribe(response => {
        this.consulta = response;
        console.log(this.consulta)
      })
    })
  }

  excluir() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.consultaServ.excluir(this.consulta.id).subscribe(response => {
        load.dismiss();
        this.template.myAlert('Excluído com sucesso');
        this.navCtrl.navigateRoot('/home');
      })

    })
  }

}
