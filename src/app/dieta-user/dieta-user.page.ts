import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, NavController } from '@ionic/angular';
import { Dieta } from '../model/dieta';
import { DietasService } from '../service/dietas.service';



@Component({
  selector: 'app-dieta-user',
  templateUrl: './dieta-user.page.html',
  styleUrls: ['./dieta-user.page.scss'],
})
export class DietaUserPage implements OnInit {
  listad : Dieta[] = [];
  constructor(private navCtrl : NavController,
    private menuCtrl : MenuController,
    private dietasServ : DietasService,
  
    private auth : AngularFireAuth,
   ) { }

  ngOnInit() {
    this.dietasServ.listaDeDietas().subscribe(response=> {
      this.listad = response;
    })
  }
 
  visualizar(dieta){
    this.navCtrl.navigateForward(['/dieta-visualizar',dieta.id]);
  }
}
