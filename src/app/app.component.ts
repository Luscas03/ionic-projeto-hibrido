import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0; 
  public appPages = [
    
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    
    {
      title: 'Cadastro de Pratos',
      url: '/pratos-cadastro',
      icon: 'bag-handle'
    },
    {
      title: 'Lista de Produtos',
      url: '/produto-lista',
      icon: 'apps'
    },
    {
      title: 'Cadastro de Clientes',
      url: '/cliente-cadastro',
      icon: 'person-add'
    },
    {
      title: 'Lista de Clientes',
      url: '/cliente-lista',
      icon: 'list-circle'
    },
    {
      title: 'Marcar Consulta',
      url: '/marcar-consulta',
      icon: 'add'
    },
    {

      title: 'Dietas e Serviços',
      url: '/dietas-servicos',
      icon: 'accessibility'
    },
    {
      title: 'Sair',
      url: '/sair',
      icon: 'log-out'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
  
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
}
