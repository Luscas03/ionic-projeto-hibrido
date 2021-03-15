import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';
import { PratoService } from '../service/prato.service';
import { Prato } from '../model/prato';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
lista : Consulta[] = [];
listap : Prato[] = [];
  constructor(private menuCtrl : MenuController,
    private consultaServ : ConsultaService,
    private navCtrl: NavController,
    private auth : AngularFireAuth,
    private pratoServ : PratoService,
    ) { 
    this.menuCtrl.enable(true);
  
 
  }

  ngOnInit() {
    this.pratoServ.listaDePrato().subscribe(response=> {
      this.listap = response;
    })
  
  }

  ionViewWillEnter(){
    this.auth.authState.subscribe(response=>{ // dados usuário logado
      if(response!== null){
      this.consultaServ.listaDeConsultas(response.uid).subscribe(response => {
        this.lista = response;
    
      })
    }
    })
  }

    visualizar(consulta){
      this.navCtrl.navigateForward(['/consulta-visualizar',consulta.id]);
    }
    visualizarP(prato){
      this.navCtrl.navigateForward(['/prato-visualizar',prato.id]);
    }
    marcar() {
      this.navCtrl.navigateForward(['/marcar-consulta']);
    }
}
  