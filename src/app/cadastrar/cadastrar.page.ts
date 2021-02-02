import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

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
  private menuCtrl : MenuController
    ) {
     

      this.menuCtrl.enable(false);
      this.iniciarForm();
    
     }

  ngOnInit() {

    
  }
  cadastrar(){
    let user = this.formGroup.controls['username'].value;
    let password = this.formGroup.controls['password'].value;
    this.auth.createUserWithEmailAndPassword(user,password).then(data=>{
      this.navCtrl.navigateRoot(['/login']);
    }).catch(err=>{
      console.log("Cadastro incorreto!");
    })
    
    
    
  }
  cancelar(){
    this.navCtrl.navigateBack(['/login']);
  }
  iniciarForm(){

this.formGroup = this.formB.group ({
  name :['', [Validators.required, Validators.minLength(3)]],
   username : ['', [Validators.required, Validators.email]],
 tel : ['', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{11}"))]],
  password : ['', [Validators.required, Validators.minLength(8)]]
})

  }
 
}
