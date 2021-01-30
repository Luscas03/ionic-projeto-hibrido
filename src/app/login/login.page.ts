import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



 formGroup : FormGroup;


  constructor(private formB : 
    FormBuilder,
    private navCtrl : NavController,
    private menuCtrl : MenuController,
    ) {
this.menuCtrl.enable(false);
this.iniciarForm();



   }

  ngOnInit() {
  }

logar(){

console.log("Login com sucesso!");
console.log(this.formGroup.value);
this.navCtrl.navigateRoot(['/home']);




}
cadastrar(){
  this.navCtrl.navigateRoot(['/cadastrar']);
}
iniciarForm(){
this.formGroup = this.formB.group({
username : ['',[Validators.required, Validators.email]],
password : ['',[Validators.required, Validators.minLength(6)]]

})
}


}
