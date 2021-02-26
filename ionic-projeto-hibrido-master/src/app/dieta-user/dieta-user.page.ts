import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dieta-user',
  templateUrl: './dieta-user.page.html',
  styleUrls: ['./dieta-user.page.scss'],
})
export class DietaUserPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  cetogenica() {
    this.navCtrl.navigateForward(['/dieta-cetogenica']);
  }
  lc() {
    this.navCtrl.navigateForward(['/dieta-low-carb']);
  }
}
