import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
lista : Consulta[] = [];
  constructor(private menuCtrl : MenuController,
    private consultaServ : ConsultaService,
    private navCtrl: NavController,
    private auth : AngularFireAuth) { 
    this.menuCtrl.enable(true);
  
 
  }

  ngOnInit() {

    this.auth.authState.subscribe(response=>{ // dados usuário logado
      this.consultaServ.listaDeConsultas(response.uid).subscribe(response => {
        this.lista = response;
      })
    })


   
    
    }

  
    
    
    marcar() {
      this.navCtrl.navigateForward(['/marcar-consulta']);
    }
  
  
}

