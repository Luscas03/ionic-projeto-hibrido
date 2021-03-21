import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, NavController } from '@ionic/angular';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-servicos-user',
  templateUrl: './servicos-user.page.html',
  styleUrls: ['./servicos-user.page.scss'],
})
export class ServicosUserPage implements OnInit {
listas : Servico[] = [];
servico : Servico = new Servico();
constructor(private navCtrl : NavController,
    private menuCtrl : MenuController,
    private template: TemplateService,
    private servicoServ : ServicoService,
  
    private auth : AngularFireAuth) { }

  ngOnInit() {
    this.servicoServ.listaDeServicos().subscribe(response=> {
    this.listas = response;
  
    

  
    })
  }  
  visualizar(servico){
    this.navCtrl.navigateForward(['/servico-excluir', servico.id]);
  }

 

}
