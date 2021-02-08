import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-login-recuperar',
  templateUrl: './login-recuperar.page.html',
  styleUrls: ['./login-recuperar.page.scss'],
})
export class LoginRecuperarPage implements OnInit {
  formGroup: FormGroup;
  constructor(private formB:
    FormBuilder,
    private auth: AngularFireAuth,
    private template: TemplateService,
    private navCtrl: NavController
    ) { 


      this.iniciarForm();
    }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formB.group({
      username: ['', [Validators.required, Validators.email]]

    })
  }

recuperar(){
  this.template.loading.then(load => {

      


    load.present();
    let user = this.formGroup.controls['username'].value;
   
    this.auth.sendPasswordResetEmail(user).then(data => {
      load.dismiss();

      this.template.myAlert("Verifique sua caixa de E-mail!");

    }).catch(err => {
      load.dismiss();
    this.template.myAlert("Login Incorreto");






    })
  })

}

}
