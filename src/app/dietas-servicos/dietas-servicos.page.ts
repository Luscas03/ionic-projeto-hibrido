import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dietas-servicos',
  templateUrl: './dietas-servicos.page.html',
  styleUrls: ['./dietas-servicos.page.scss'],
})
export class DietasServicosPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
   dietas() {
   this.navCtrl.navigateForward(['/dieta-user']);
   }
   servicos() {
     this.navCtrl.navigateForward(['/servicos-user']);
   }

}
