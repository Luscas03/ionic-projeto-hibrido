import { Component, OnInit } from '@angular/core';
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

  private menuCtrl : MenuController
    ) {
     

      this.menuCtrl.enable(false);
      this.iniciarForm();
    
     }

  ngOnInit() {

    
  }
  cadastrar(){
    console.log("Cadastrado com sucesso!");
    console.log(this.formGroup.value);
  this.navCtrl.navigateRoot(['/login']);
    
    
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
