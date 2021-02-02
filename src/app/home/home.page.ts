import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuCtrl : MenuController) { 
    this.menuCtrl.enable(true);
  
 
  }

  ngOnInit() {
    
    }

    toggleTheme(event){
   
  
     if(event.detail.checked){
       document.body.setAttribute('color-theme','dark')
     }else{
      document.body.setAttribute('color-theme','light')
     }
     
      

    }
    
    
    
  
  
}

