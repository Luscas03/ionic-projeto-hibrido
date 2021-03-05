import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  formGroup : FormGroup;
 
  constructor(
  private formB : FormBuilder,
  private navCtrl : NavController,
  private auth : AngularFireAuth, 
  private menuCtrl : MenuController,
  private template : TemplateService
    ) {
     

      this.menuCtrl.enable(false);
      this.iniciarForm();
    
     }

  ngOnInit() {

    
  }
  cadastrar(){
this.template.loading.then(load =>{
  


  load.present();
    let user = this.formGroup.controls['username'].value;
    let password = this.formGroup.controls['password'].value;
    this.auth.createUserWithEmailAndPassword(user,password).then(data=>{
      load.dismiss();
      this.navCtrl.navigateRoot(['/login']);
    }).catch(err=>{
      load.dismiss();
 this.template.myAlert("Conta Existente")
    })
    
    
  })
  }
  cancelar(){
    this.navCtrl.navigateBack(['/login']);
  }
  iniciarForm(){

this.formGroup = this.formB.group ({
  // name :['', [Validators.required, Validators.minLength(3)]],
   username : ['', [Validators.required, Validators.email]],
//  tel : ['', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{11}"))]],
  password : ['', [Validators.required, Validators.minLength(7)]]
})

  }
 
}
